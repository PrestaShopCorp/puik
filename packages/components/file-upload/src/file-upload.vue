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
          accept=".jpg,.jpeg,.png,.doc,.docx,.pdf"
          @change="handleDrop"
          @dragover="onDragOver"
          @dragleave="onDragLeave"
          @mouseleave="onDragLeave"
        />
      </label>
      <div
        class="puik-file-upload__dropzone-items"
        :class="{ 'mt-3 px-4 pb-5': state?.files.length }"
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
      variant="danger"
      button-label="Close"
      @click="displayError = false"
      >{{ textAlert }}</puik-alert
    >

    <p class="puik-file-upload__infos" v-html="t('puik.fileUpload.infos')"></p>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref, watch, reactive, computed } from 'vue'
import { useLocale } from '@puik/hooks'
import PuikAlert from '../../alert'
import FileUploadItem from './item/file-upload-item.vue'
import { fileUploadProps } from './file-upload'
import { startUploadingItem } from './helpers'
import type { UploadingFileProps } from './file-upload-types'

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
let timeout: undefined | ReturnType<typeof setTimeout>

interface FileItem {
  frontId: number
}

const state = reactive({
  closing: false,
  // apiTicketId: null as string | null,
  files: [] as FileItem[],
  // displayedFiles: computed((): { frontId: number }[] =>
  //   state.apiTicketId === null ? [] : state.files
  // ),
  totalSizeOfFiles: 0,
})

watch(
  () => displayError.value,
  () => {
    if (displayError.value)
      timeout = setTimeout(() => (displayError.value = false), 7000)
  }
)

onUnmounted(() => {
  if (timeout !== undefined) clearTimeout(timeout)
})

const onDragOver = () => {
  // if (state.closing) return;
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
    const validation = props.validateFile(file)
    if (!validation.valid) {
      displayError.value = true
      textAlert.value = validation.errorMessage
      continue
    }
    state.totalSizeOfFiles += file.size
    await addUploadingFile(file)
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
    state.totalSizeOfFiles -= item.file.size
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
