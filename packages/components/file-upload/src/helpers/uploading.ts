import { reactive } from 'vue'
import { slowDownProgress } from './progress'
import type { UploadFileHandler } from '../file-upload'
import type { UploadingFileProps } from '../file-upload-types'

let frontIdSeq = 0

export function startUploadingItem(
  uploadFileCb: UploadFileHandler,
  file: File
): UploadingFileProps {
  const minDurationMs = 1000

  const status = reactive({
    hasError: false,
    ended: false,
    progress: 0,
  })

  const onUploadProgress = slowDownProgress((progress: number) => {
    if (status.ended) return
    status.progress = progress
  }, minDurationMs)

  const uploadPromise = uploadFile({
    minDurationMs,
    file,
    onUploadProgress,
    uploadFileCb,
  }).then(
    (val) => {
      status.ended = true
      return val
    },
    (error) => {
      status.ended = true
      status.hasError = true
      throw error
    }
  )

  return {
    frontId: ++frontIdSeq,
    file,
    status,
    uploadPromise,
  }
}

const uploadFile = async (options: {
  minDurationMs: number
  file: File
  onUploadProgress: (progress: number) => void
  uploadFileCb: UploadFileHandler
}) => {
  const { file, minDurationMs, onUploadProgress, uploadFileCb } = options
  const startTime = Date.now()
  const resp = await uploadFileCb(file, { onUploadProgress })

  const remainingTime = startTime + minDurationMs - Date.now()
  if (remainingTime > 0) {
    await new Promise<void>((resolve) => setTimeout(resolve, remainingTime))
  }

  return {
    fileRelId: resp.fileRelId,
  }
}
