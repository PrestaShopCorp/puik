<script setup lang="ts">
import { onUnmounted, ref, reactive, onMounted } from 'vue'
import { useLocale } from '@puik/hooks'
import PuikAlert from '../../alert'
import PuikFileUploadItem from './file-upload-item.vue'
import { fileUploadProps } from './file-upload'
import { startUploadingItem, createUploadedItem } from './helpers/uploading'
import type { UploadingFileProps, FrontItem } from './helpers/internal-types'

const { t } = useLocale()

defineOptions({
  name: 'PuikFileUpload',
})
const props = defineProps(fileUploadProps)
defineExpose({ closeAll })

const displayError = ref(false)
const textAlert = ref<string>()
const isDragOver = ref(false)

const uploadingMap = new Map<number, UploadingFileProps>()
let timeoutId: undefined | ReturnType<typeof setTimeout>

const state = reactive({
  closing: false,
  files: [] as FrontItem[],
  totalSizeB: 0,
})

onMounted(() => {
  for (const uploadedFile of props.initialFiles ?? []) {
    const validation = props.validateFile(uploadedFile.file, {
      totalSizeB: state.totalSizeB,
    })
    if (!validation.valid) continue
    state.totalSizeB += uploadedFile.file.size
    const item = createUploadedItem(uploadedFile)
    uploadingMap.set(item.frontId, item)
    state.files.push({ frontId: item.frontId })
  }
})

onUnmounted(closeAlert)

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
    })
    if (!validation.valid) {
      showAlert(validation.errorMessage)
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
  if (timeoutId) clearTimeout(timeoutId)
  timeoutId = setTimeout(() => {
    timeoutId = undefined
    closeAlert()
  }, 7000)
}

function closeAlert() {
  textAlert.value = ''
  displayError.value = false
  if (timeoutId !== undefined) {
    clearTimeout(timeoutId)
    timeoutId = undefined
  }
}

function addUploadingFile(file: File) {
  const item = startUploadingItem(props.uploadFile, file, props.slowDownMs)
  uploadingMap.set(item.frontId, item)
  state.files.push({ frontId: item.frontId })
}

const onItemRemoved = (frontId: number) => {
  const item = uploadingMap.get(frontId)
  if (item) {
    state.totalSizeB -= item.file.size
  }
  uploadingMap.delete(frontId)
  const index = state.files.findIndex((item) => item.frontId === frontId)
  if (index === -1) return
  state.files.splice(index, 1)
}

function getUploadingFileProps({ frontId }: FrontItem): UploadingFileProps {
  const item = uploadingMap.get(frontId)
  if (item === undefined) {
    throw new Error(`Missing uploading item '${frontId}'`)
  }
  return item
}

/**
 * Used by the parent component.
 */
async function closeAll() {
  state.closing = true
  await Promise.all(
    Array.from(uploadingMap.values()).map((item) => item.uploadPromise)
  )
}
</script>

<template>
  <div class="puik-file-upload">
    <div
      class="puik-file-upload__dropzone"
      :class="{ 'puik-file-upload__dropzone--drag-over': isDragOver }"
    >
      <label>
        <input
          type="file"
          class="puik-file-upload__input"
          multiple
          :accept="props.inputAccept"
          @change="handleDrop"
          @dragover="onDragOver"
          @dragleave="onDragLeave"
          @mouseleave="onDragLeave"
        />
        <span class="puik-file-upload__label">
          <span
            class="puik-file-upload__icon material-icons-round"
            aria-hidden="true"
            role="img"
            >upload</span
          >
          <span class="" v-html="t('puik.fileUpload.dropzoneLabel')"></span>
        </span>
      </label>

      <div
        class="puik-file-upload__items"
        :class="{ 'puik-file-upload__items--full': state?.files.length }"
      >
        <puik-file-upload-item
          v-for="file in state.files"
          :key="file.frontId"
          :uploading="getUploadingFileProps(file)"
          :closing="state.closing"
          :accessibility-remove-label="t('puik.fileUpload.removeLabel')"
          :delete-file-cb="props.deleteFile"
          @removed="onItemRemoved"
        ></puik-file-upload-item>
      </div>
    </div>

    <puik-alert
      v-show="displayError"
      :title="t('puik.fileUpload.errorTitle')"
      variant="warning"
      button-label="Close"
      @click="closeAlert"
      >{{ textAlert }}</puik-alert
    >
  </div>
</template>
