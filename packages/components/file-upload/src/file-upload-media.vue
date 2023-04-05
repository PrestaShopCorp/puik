<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useEventListener } from '@vueuse/core'
import PuikIcon from '@puik/components/icon'
import PuikProgressBar from '@puik/components/progress-bar'
import { fileUploadMediaProps } from './file-upload-media'
import type { ComputedRef } from 'vue'

defineOptions({
  name: 'PuikFileUploadMedia',
})
const props = defineProps(fileUploadMediaProps)

const emit = defineEmits(['removed'])

const state = reactive<{
  fileId?: string
  thumbnailIcon?: string
  imageSrc?: string
  isImage: ComputedRef<boolean>
  inProgress: ComputedRef<boolean>
}>({
  isImage: computed(() => props.uploading.file.type.startsWith('image/')),
  inProgress: computed(() => state.fileId === undefined),
})

readImage()
waitForUpload() // do not await

function readImage() {
  if (state.isImage) {
    const reader = new FileReader()
    useEventListener(
      reader,
      'load',
      function (this: { result: string }) {
        state.imageSrc = this.result
      },
      false
    )
    useEventListener(reader, 'error', () => {
      state.imageSrc = undefined
      state.thumbnailIcon = 'image'
    })
    reader.readAsDataURL(props.uploading.file)
    state.thumbnailIcon = 'image'
  } else if (/\.(pdf)$/i.test(props.uploading.file.name)) {
    state.thumbnailIcon = 'picture_as_pdf'
  } else {
    state.thumbnailIcon = 'insert_drive_file'
  }
}

async function waitForUpload() {
  try {
    const resp = await props.uploading.uploadPromise
    state.fileId = resp.fileId
    if (state.isImage) {
      state.thumbnailIcon = undefined
    }
  } catch (error) {
    // On error, the file is not on the server. So it is considered as removed.
    emit('removed', props.uploading.frontId)
  }
}

const deleteMedia = async () => {
  if (state.fileId === undefined) return
  await props.deleteFileCb(state.fileId)
  emit('removed', props.uploading.frontId)
}
</script>

<template>
  <article class="puik-file-upload-media">
    <PuikIcon
      v-if="state.thumbnailIcon"
      :icon="state.thumbnailIcon"
      font-size="6rem"
      node-type="span"
      aria-hidden="true"
      role="img"
      class="puik-file-upload-media__big-icon"
      :class="{ 'puik-file-upload-media__big-icon--light': state.inProgress }"
    />
    <img
      v-else-if="state.imageSrc"
      class="puik-file-upload-media__img"
      :src="state.imageSrc"
    />
    <div class="puik-file-upload-media__footer puik-file-upload-media-footer">
      <PuikProgressBar
        v-if="!uploading.status.ended"
        class="puik-file-upload-media-footer__progress"
        :percentage="uploading.status.progress * 100"
      />
      <span class="puik-file-upload-media-footer__name">{{
        uploading.file.name
      }}</span>
      <button
        v-if="uploading.status.ended && !closing"
        class="puik-file-upload-media-footer__close-btn"
        :aria-label="accessibilityRemoveLabel"
        @click="deleteMedia"
      >
        <PuikIcon
          icon="cancel"
          font-size="1.5rem"
          node-type="span"
          class="puik-file-upload-media-footer__close-icon"
        />
      </button>
    </div>
  </article>
</template>
