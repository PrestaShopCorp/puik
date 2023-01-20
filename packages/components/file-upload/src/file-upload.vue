<script setup lang="ts">
import { onUnmounted, ref, reactive } from 'vue'
import { useLocale } from '@puik/hooks'
import PuikAlert from '../../alert'
import FileUploadItem from './file-upload-item.vue'
import { fileUploadProps } from './file-upload'
import { startUploadingItem } from './helpers/uploading'
import type { UploadingFileProps } from './helpers/internal-types'

const { t } = useLocale()

defineOptions({
  name: 'PuikFileUpload',
})
const props = defineProps(fileUploadProps)
defineExpose([closeAll])

const dropzone = ref<null | HTMLElement>(null)
const displayError = ref(false)
const textAlert = ref<string>()
const uploadingMap = new Map<number, UploadingFileProps>()
let timeoutId: undefined | ReturnType<typeof setTimeout>

interface FileItem {
  frontId: number
}

const state = reactive({
  closing: false,
  files: [] as FileItem[],
  totalSizeB: 0,
})

onUnmounted(closeAlert)

const onDragOver = () => {
  if (state.closing) return
  const selectElement = dropzone.value?.querySelector(
    '.puik-file-upload__dropzone'
  )
  dropzone.value?.classList.add('border-purple-500')
  if (selectElement) selectElement.classList.add('underline')
}

const onDragLeave = () => {
  const selectElement = dropzone.value?.querySelector(
    '.puik-file-upload__dropzone'
  )
  dropzone.value?.classList.remove('border-purple-500')
  if (selectElement) selectElement.classList.remove('underline')
}

const handleDrop = async (e: Event) => {
  if (state.closing) return
  const element = e.currentTarget as HTMLInputElement

  dropzone.value?.classList.remove('border-purple500')

  for (const file of element.files ?? []) {
    const validation = props.validateFile(file, {
      totalSizeB: state.totalSizeB,
    })
    if (!validation.valid) {
      showAlert(validation.errorMessage)
      continue
    }
    state.totalSizeB += file.size
    await addUploadingFile(file)
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

async function addUploadingFile(file: File) {
  const item = startUploadingItem(props.uploadFile, file)

  uploadingMap.set(item.frontId, item)
  state.files.push({ frontId: item.frontId })
}

const onAttachmentRemoved = (frontId: number) => {
  const item = uploadingMap.get(frontId)
  if (item) {
    state.totalSizeB -= item.file.size
  }
  uploadingMap.delete(frontId)
  const index = state.files.findIndex((item) => item.frontId === frontId)
  if (index === -1) return
  state.files.splice(index, 1)
}

async function deleteFile(fileRelId: number): Promise<boolean> {
  return await props.deleteFile(fileRelId)
}

function getUploadingFileProps({ frontId }: FileItem): UploadingFileProps {
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
    <div ref="dropzone" class="puik-file-upload__dropzone">
      <label>
        <span>
          <span
            class="puik-file-upload__dropzone-icon material-icons-round"
            aria-hidden="true"
            role="img"
            >upload</span
          >
          <span v-html="t('puik.fileUpload.label')"></span>
        </span>
        <input
          type="file"
          multiple
          :accept="props.inputAccept"
          @change="handleDrop"
          @dragover="onDragOver"
          @dragleave="onDragLeave"
          @mouseleave="onDragLeave"
        />
      </label>

      <div
        class="puik-file-upload__items"
        :class="{ 'puik-file-upload__items--full': state?.files.length }"
      >
        <file-upload-item
          v-for="file in state.files"
          :key="file.frontId"
          :uploading="getUploadingFileProps(file)"
          :closing="state.closing"
          accessibility-remove-label="Delete image"
          :delete-file-cb="deleteFile"
          @removed="onAttachmentRemoved"
        ></file-upload-item>
      </div>
    </div>

    <puik-alert
      v-if="displayError"
      title="Erreur"
      variant="warning"
      button-label="Close"
      @click="closeAlert"
      >{{ textAlert }}</puik-alert
    >
  </div>
</template>
