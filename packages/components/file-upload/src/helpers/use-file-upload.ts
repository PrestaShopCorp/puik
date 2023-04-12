import { onUnmounted, reactive, ref, type ExtractPropTypes } from 'vue'
import { useTimeoutFn } from '@vueuse/core'
import { useLocale } from '@puik/hooks'
import { startUploadingMedia, createUploadedMedia } from './uploading'
import type { fileUploadProps } from '../file-upload'
import type { UploadingFileProps, FrontMedia } from './internal-types'

export function useFileUpload(
  props: Readonly<ExtractPropTypes<typeof fileUploadProps>>
) {
  const uploadingMap = new Map<number, UploadingFileProps>()
  const isDragOver = ref(false)
  const displayError = ref(false)
  const textAlert = ref<string>()
  const { t } = useLocale()

  const delayedClose = useTimeoutFn(closeAlert, 7000, {
    immediate: false,
  })

  const state = reactive({
    closing: false,
    files: [] as FrontMedia[],
    totalSizeB: 0,
  })

  initInitialFiles()
  onUnmounted(closeAlert)

  function initInitialFiles() {
    for (const uploadedFile of props.initialFiles ?? []) {
      const validation = props.validateFile(uploadedFile.file, {
        totalSizeB: state.totalSizeB,
        accept: props.accept,
        maxFileSizeB: props.maxFileSizeB,
        maxTotalSizeB: props.maxTotalSizeB,
        t,
      })
      if (!validation.valid) continue
      state.totalSizeB += uploadedFile.file.size
      const media = createUploadedMedia(uploadedFile)
      uploadingMap.set(media.frontId, media)
      state.files.push({ frontId: media.frontId })
    }
  }

  const onDragOver = () => {
    if (state.closing) return
    isDragOver.value = true
  }

  const onDragLeave = () => {
    isDragOver.value = false
  }

  const handleDrop = (e: Event) => {
    if (state.closing) return
    const element = e.target as HTMLInputElement

    isDragOver.value = false

    for (const file of element.files ?? []) {
      const validation = props.validateFile(file, {
        totalSizeB: state.totalSizeB,
        accept: props.accept,
        maxFileSizeB: props.maxFileSizeB,
        maxTotalSizeB: props.maxTotalSizeB,
        t,
      })
      if (!validation.valid) {
        showAlert(validation.message)
        continue
      }
      state.totalSizeB += file.size
      addUploadingFile(file)
    }

    element.value = ''
  }

  function showAlert(errorMessage: string) {
    textAlert.value = errorMessage
    displayError.value = true
    if (delayedClose.isPending) delayedClose.stop()
    delayedClose.start()
  }

  function closeAlert() {
    textAlert.value = ''
    displayError.value = false
    delayedClose.stop()
  }

  function addUploadingFile(file: File) {
    const media = startUploadingMedia(props.uploadFile, file, props.slowDownMs)
    uploadingMap.set(media.frontId, media)
    state.files.push({ frontId: media.frontId })
  }

  const onMediaRemoved = (frontId: number) => {
    const media = uploadingMap.get(frontId)
    if (media) {
      state.totalSizeB -= media.file.size
    }
    uploadingMap.delete(frontId)
    const index = state.files.findIndex((media) => media.frontId === frontId)
    if (index === -1) return
    state.files.splice(index, 1)
  }

  function getUploadingFileProps({ frontId }: FrontMedia): UploadingFileProps {
    const media = uploadingMap.get(frontId)
    if (media === undefined) {
      throw new Error(`Missing uploading media '${frontId}'`)
    }
    return media
  }

  return {
    state,
    onDragOver,
    onDragLeave,
    handleDrop,
    onMediaRemoved,
    getUploadingFileProps,
    isDragOver,
    uploadingMap,
    displayError,
    closeAlert,
    textAlert,
    t,
  }
}
