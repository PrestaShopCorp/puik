<script setup lang="ts">
import { reactive, onMounted, computed } from 'vue'
import PuikIcon from '@puik/components/icon'
import PuikProgressBar from '@puik/components/progress-bar'
import { fileUploadItemProps } from './file-upload-item'
import type { ComputedRef } from 'vue'

defineOptions({
  name: 'PuikFileUploadItem',
})
const props = defineProps(fileUploadItemProps)

const emit = defineEmits(['removed'])

const state = reactive<{
  fileId?: string
  bigIconName?: string
  image?: { src: string }
  isImage: ComputedRef<boolean>
  inProgress: ComputedRef<boolean>
}>({
  isImage: computed(() => props.uploading.file.type.startsWith('image/')),
  inProgress: computed(() => state.fileId === undefined),
})

onMounted(() => {
  if (state.isImage) {
    const reader = new FileReader()
    reader.addEventListener(
      'load',
      function () {
        state.image = {
          src: this.result as string,
        }
      },
      false
    )
    reader.addEventListener('error', () => {
      state.image = undefined
      state.bigIconName = 'image'
    })
    reader.readAsDataURL(props.uploading.file)
    state.bigIconName = 'image'
  } else if (/\.(pdf)$/i.test(props.uploading.file.name)) {
    state.bigIconName = 'picture_as_pdf'
  } else if (/\.(doc|docx)$/i.test(props.uploading.file.name)) {
    state.bigIconName = 'insert_drive_file'
  }
  waitForUpload() // do not await
})

async function waitForUpload() {
  try {
    const resp = await props.uploading.uploadPromise
    state.fileId = resp.fileId
    if (state.isImage) {
      state.bigIconName = undefined
    }
  } catch (error) {
    // On error, the file is not on the server. So it is considered as removed.
    emit('removed', props.uploading.frontId)
  }
}

const deleteItem = async () => {
  if (state.fileId === undefined) return
  await props.deleteFileCb(state.fileId)
  emit('removed', props.uploading.frontId)
}
</script>

<template>
  <article class="puik-file-upload-item">
    <PuikIcon
      v-if="state.bigIconName"
      :icon="state.bigIconName"
      font-size="96"
      node-type="span"
      aria-hidden="true"
      role="img"
      class="puik-file-upload-item__big-icon"
      :class="{ 'puik-file-upload-item__big-icon--light': state.inProgress }"
    />
    <img
      v-else-if="state.image"
      class="puik-file-upload-item__img"
      :src="state.image.src"
    />
    <div class="puik-file-upload-item__footer puik-file-upload-item-footer">
      <PuikProgressBar
        v-if="!uploading.status.ended"
        class="puik-file-upload-item-footer__progress"
        :percentage="uploading.status.progress * 100"
      />
      <span class="puik-file-upload-item-footer__name">{{
        uploading.file.name
      }}</span>
      <button
        v-if="uploading.status.ended && !closing"
        class="puik-file-upload-item-footer__close-btn"
        :aria-label="accessibilityRemoveLabel"
        @click="deleteItem"
      >
        <PuikIcon
          icon="cancel"
          font-size="24"
          node-type="span"
          class="puik-file-upload-item-footer__close-icon"
        />
      </button>
    </div>
  </article>
</template>
