<script setup lang="ts">
import { useLocale } from '@puik/hooks'
import PuikAlert from '@puik/components/alert'
import PuikFileUploadMedia from './file-upload-media.vue'
import { fileUploadProps } from './file-upload'
import { useFileUpload } from './helpers/use-file-upload'

const { t } = useLocale()

const props = defineProps(fileUploadProps)

const {
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
} = useFileUpload(props)

defineOptions({
  name: 'PuikFileUpload',
})
defineExpose({ finishUploading })

/**
 * Used by the parent component.
 */
async function finishUploading() {
  state.closing = true
  await Promise.all(
    Array.from(uploadingMap.values()).map((media) => media.uploadPromise)
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
          :accept="accept"
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
          <span
            class="puik-file-upload__text"
            v-html="t('puik.fileUpload.dropzoneLabel')"
          ></span>
        </span>
      </label>

      <div
        class="puik-file-upload__medias"
        :class="{ 'puik-file-upload__medias--full': state.files.length }"
      >
        <puik-file-upload-media
          v-for="file in state.files"
          :key="file.frontId"
          :uploading="getUploadingFileProps(file)"
          :closing="state.closing"
          :accessibility-remove-label="t('puik.fileUpload.removeLabel')"
          :delete-file-cb="deleteFile"
          @removed="onMediaRemoved"
        ></puik-file-upload-media>
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
