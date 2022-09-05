<template>
  <div class="puik-drag-drop">
    <!-- <alert
      :is-visible="displayTooltip"
      :text="textAlert"
      :aria-labelledby="`field_attachment-${id}`"
      @close="displayTooltip = false"
    ></alert> -->
    <div ref="dropzone" class="puik-drag-drop__dropzone">
      <label :for="`puik-drag-drop--${id}`">
        <Icon
          :icon="'download'"
          :node-type="'span'"
          :color="'#505969'"
          role="img"
          aria-hidden="true"
          font-size="1.5rem"
          class="puik-drag-drop--download"
        ></Icon>
        <span class="puik-drag-drop--select" tabindex="0">{{
          t('puik.dragDrop.select')
        }}</span>
        <span>&nbsp;{{ t('puik.dragDrop.fileOrDrop') }}</span>
      </label>
      <input
        :id="`puik-drag-drop--${id}`"
        type="file"
        multiple
        accept=".jpg,.jpeg,.png,.doc,.docx,.pdf"
        @change="handleDrop"
        @dragover="onDragOver"
        @dragleave="onDragLeave"
        @mouseleave="onDragLeave"
      />
      <!-- <div
        class="flex gap-4 flex-wrap justify-center sm:justify-start"
        :class="{ 'mt-3 px-4 pb-5': state.displayedFiles.length }"
      >
        <attachment-item
          v-for="f in state.displayedFiles"
          :key="f.frontId"
          :attachment="getAttachment(f.frontId)"
          :closing="state.closing"
          @removed="onAttachmentRemoved"
        ></attachment-item>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { useLocale } from '@puik/hooks'
import Icon from '../../icon/src/icon.vue'
import { dragDropProps } from './drag-drop'
import { slowDownProgress } from './progress'

defineOptions({
  name: 'PuikDragDrop',
})

const props = defineProps(dragDropProps)
const maxFileSizeB = 2 * 1024 * 1024 // 2 MB
const maxTotalSizeB = 10 * 1024 * 1024 // 10 MB

const dropzone = ref<null | HTMLElement>(null)
// const { app, $api } = useNuxtApp()
const displayTooltip = ref(false)
const textAlert = ref('')
const attachments = new Map()
const { t } = useLocale()

const state = reactive({
  closing: false,
  apiTicketId: null as string | null,
  files: [] as { frontId: number }[],
  displayedFiles: computed((): { frontId: number }[] =>
    state.apiTicketId === null ? [] : state.files
  ),
  totalSizeOfFiles: 0,
})

watch(
  () => displayTooltip.value,
  () => {
    if (displayTooltip.value)
      setTimeout(() => (displayTooltip.value = false), 7000)
  }
)

const getAttachment = (frontId: number) => {
  const attachment = attachments.get(frontId)
  if (attachment === undefined) {
    throw new Error(`Missing attachment '${frontId}'`)
  }
  return attachment
}

const handleDrop = async (e: Event) => {
  if (state.closing) return
  const element = e.currentTarget as HTMLInputElement

  dropzone.value?.classList.remove('border-purple500')

  for (const file of element.files ?? []) {
    const errorMessage = isValidFile(file)
    if (errorMessage) {
      displayTooltip.value = true
      textAlert.value = errorMessage
      continue
    }
    state.totalSizeOfFiles += file.size
    await addAttachment(file)
  }
}

const onDragOver = () => {
  if (state.closing) return
  const selectElement = dropzone.value?.querySelector('.dropzone__select')
  dropzone.value?.classList.add('border-purple500')
  if (selectElement) selectElement.classList.add('underline')
}

const onDragLeave = () => {
  const selectElement = dropzone.value?.querySelector('.dropzone__select')
  dropzone.value?.classList.remove('border-purple500')
  if (selectElement) selectElement.classList.remove('underline')
}

const onAttachmentRemoved = (frontId: number) => {
  const attachment = attachments.get(frontId)
  if (attachment) {
    state.totalSizeOfFiles -= attachment.file.size
  }
  attachments.delete(frontId)
  const index = state.files.findIndex((item) => item.frontId === frontId)
  if (index === -1) return
  state.files.splice(index, 1)
}

/**
 * @returns An error message if the file is invalid. Or `undefined` if the file is valid.
 */
function isValidFile(file: File): string | undefined {
  if (file.size > maxFileSizeB) {
    return t('PAGE.CONTACT.FORM.ATTACHMENT.ERROR.SIZE')
  } else if (!/\.(pdf|doc|docx|jpg|jpeg|png)$/i.test(file.name)) {
    // File format error handling
    return t('PAGE.CONTACT.FORM.ATTACHMENT.ERROR.FORMAT')
  } else if (state.totalSizeOfFiles + file.size > maxTotalSizeB) {
    // Total file size error handling (10MO max)
    return t('PAGE.CONTACT.FORM.ATTACHMENT.ERROR.SIZE_TOTAL')
  }
}

async function addAttachment(file: File) {
  if (state.apiTicketId === null) {
    state.apiTicketId = await props.getApiTicketId()
  }
  const attachment = startUploadingItem(state.apiTicketId, file)

  attachments.set(attachment.frontId, attachment)
  state.files.push({ frontId: attachment.frontId })
}

// function startUploadingItem(apiTicketId: string, file: File) {
//   const minDurationMs = 1000

//   const status = reactive({
//     hasError: false,
//     ended: false,
//     progress: {
//       max: 100,
//       value: 0,
//     },
//   })

//   const onUploadProgress = slowDownProgress((progress: number) => {
//     if (status.ended) return
//     status.progress.max = 100
//     status.progress.value = progress * 100
//   }, minDurationMs)

//   const uploadPromise = uploadFile({
//     minDurationMs,
//     apiTicketId,
//     file,
//     onUploadProgress,
//   }).then(
//     (val) => {
//       status.ended = true
//       return val
//     },
//     (error) => {
//       status.ended = true
//       status.hasError = true
//       throw error
//     }
//   )

//   return {
//     frontId: ++frontIdSeq,
//     apiTicketId,
//     file,
//     status,
//     uploadPromise,
//   }
// }

// const uploadFile = async (options: {
//   minDurationMs: number
//   apiTicketId: string
//   file: File
//   onUploadProgress: (progress: number) => void
// }) => {
//   const { apiTicketId, file, minDurationMs, onUploadProgress } = options
//   const startTime = Date.now()

//   const resp = await $api.addAttachment(file, apiTicketId, { onUploadProgress })

//   const remainingTime = startTime + minDurationMs - Date.now()
//   if (remainingTime > 0) {
//     await new Promise<void>((resolve) => setTimeout(resolve, remainingTime))
//   }

//   return {
//     fileRelId: resp.fileRelId,
//   }
// }

/**
 * Used by the parent component.
 */
async function closeAttachments() {
  state.closing = true
  await Promise.all(
    Array.from(attachments.values()).map(
      (attachment) => attachment.uploadPromise
    )
  )
}
</script>
