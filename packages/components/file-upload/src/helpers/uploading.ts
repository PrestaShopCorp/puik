import { reactive } from 'vue'
import { slowDownProgress } from './slow-down-progress'
import type { UploadedFile, UploadFileHandler } from '../file-upload'
import type { UploadingFileProps } from './internal-types'

let frontIdSeq = 0

export function createUploadedItem(
  uploadedFile: UploadedFile
): UploadingFileProps {
  return {
    frontId: ++frontIdSeq,
    file: uploadedFile.file,
    status: {
      ended: true,
      hasError: false,
      progress: 1,
    },
    uploadPromise: Promise.resolve({
      fileRelId: uploadedFile.fileRelId,
    }),
  }
}

export function startUploadingItem(
  uploadFileCb: UploadFileHandler,
  file: File,
  slowDownMs: number
): UploadingFileProps {
  const status = reactive({
    hasError: false,
    ended: false,
    progress: 0,
  })

  const onUploadProgress = slowDownProgress((progress: number) => {
    if (status.ended) return
    status.progress = progress
  }, slowDownMs)

  const uploadPromise = uploadFile({
    minDurationMs: slowDownMs,
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
