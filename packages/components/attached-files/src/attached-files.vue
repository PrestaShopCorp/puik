<template>
  <div class="puik-attached-files">
    <div ref="dropzone" class="puik-attached-files__dropzone">
      <label for="field_attachment">
        <span
          class="puik-attached-files__dropzone-icon material-icons-round"
          aria-hidden="true"
          role="img"
          >upload</span
        >
        <span v-html="t('puik.attachedFiles.label')"></span>
      </label>
      <input
        id="field_attachment"
        type="file"
        multiple
        accept=".jpg,.jpeg,.png,.doc,.docx,.pdf"
        @change="handleDrop"
        @dragover="onDragOver"
        @dragleave="onDragLeave"
        @mouseleave="onDragLeave"
      />
      <div
        class="puik-attached-files__dropzone-items"
        :class="{ 'mt-3 px-4 pb-5': state?.displayedFiles.length }"
      >
        <attachment-item
          v-for="file in state?.displayedFiles"
          :key="file.frontId"
          :attachment="getAttachment(file.frontId)"
          :closing="state.closing"
          @removed="onAttachmentRemoved"
        ></attachment-item>
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

    <p
      class="puik-attached-files__infos"
      v-html="t('puik.attachedFiles.infos')"
    ></p>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue'
import { useLocale } from '@puik/hooks'
import PuikAlert from '../../alert'
// import { attachedFilesProps } from './attached-files'

const { t } = useLocale()

defineOptions({
  name: 'PuikAttachedFiles',
})

// const props = defineProps(attachedFilesProps)
const dropzone = ref<null | HTMLElement>(null)
const displayError = ref(false)
const textAlert = ref(null)
let timeout: undefined | ReturnType<typeof setTimeout>

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
    '.puik-attached-files__dropzone'
  )
  dropzone.value?.classList.add('border-purple-500')
  if (selectElement) selectElement.classList.add('underline')
}
const onDragLeave = () => {
  const selectElement = dropzone.value?.querySelector(
    '.puik-attached-files__dropzone'
  )
  dropzone.value?.classList.remove('border-purple-500')
  if (selectElement) selectElement.classList.remove('underline')
}
</script>
