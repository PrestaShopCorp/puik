<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import PuikIcon from '@puik/components/icon'
import PuikProgressBar from '@puik/components/progress-bar'
import { fileUploadItemProps } from './file-upload'

defineOptions({
  name: 'PuikFileUploadItem',
})
const props = defineProps(fileUploadItemProps)

const emit = defineEmits(['removed'])

const state = reactive<{
  fileId?: string
  loadingIconName?: string
  image?: { src: string }
  documentIconName?: string
}>({})

onMounted(() => {
  if (props.uploading.file.type.startsWith('image/')) {
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
      state.documentIconName = 'image'
    })
    reader.readAsDataURL(props.uploading.file)
    state.loadingIconName = 'image'
  } else if (/\.(pdf)$/i.test(props.uploading.file.name)) {
    state.loadingIconName = 'picture_as_pdf'
    state.documentIconName = 'picture_as_pdf'
  } else if (/\.(doc|docx)$/i.test(props.uploading.file.name)) {
    state.loadingIconName = 'insert_drive_file'
    state.documentIconName = 'insert_drive_file'
  }
  waitForUpload() // do not await
})

async function waitForUpload() {
  try {
    const resp = await props.uploading.uploadPromise
    state.fileId = resp.fileId
    state.loadingIconName = undefined
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
      v-if="state.loadingIconName"
      :icon="state.loadingIconName"
      font-size="96"
      node-type="span"
      class="puik-file-upload-item__loading-icon"
    />
    <img
      v-else-if="state.image"
      class="puik-file-upload-item__img"
      :src="state.image.src"
    />

    <PuikIcon
      v-else-if="state.documentIconName"
      :icon="state.documentIconName"
      font-size="96"
      node-type="span"
      aria-hidden="true"
      role="img"
      class="puik-file-upload-item__doc-icon"
    />
    <div class="puik-file-upload-item__footer puik-file-upload-item-footer">
      <PuikProgressBar
        v-if="!props.uploading.status.ended"
        class="puik-file-upload-item-footer__progress"
        :percentage="props.uploading.status.progress * 100"
      />
      <span class="puik-file-upload-item-footer__name">{{
        props.uploading.file.name
      }}</span>
      <button
        v-if="props.uploading.status.ended && !props.closing"
        class="puik-file-upload-item-footer__close-btn"
        :aria-label="props.accessibilityRemoveLabel"
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
