<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import type { PropType } from 'vue'
import type { UploadingFileProps } from './helpers/internal-types'
import type { DeleteFileHandler } from './file-upload'

const props = defineProps({
  uploading: {
    type: Object as PropType<UploadingFileProps>,
    required: true,
  },
  closing: {
    type: Boolean,
  },
  deleteFileCb: {
    type: Function as PropType<DeleteFileHandler>,
    required: true,
  },
  accessibilityRemoveLabel: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['removed'])

const state = reactive({
  fileId: null as string | null,
  loadingIconName: null as string | null,
  image: null as { src: string } | null,
  documentIconName: null as string | null,
})

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
      state.image = null
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
    state.loadingIconName = null
  } catch (error) {
    // On error, the file is not on the server. So it is considered as removed.
    emit('removed', props.uploading.frontId)
  }
}

const removeItem = async () => {
  if (state.fileId === null) return
  await props.deleteFileCb(state.fileId)
  emit('removed', props.uploading.frontId)
}
</script>

<template>
  <article class="puik-file-upload-item">
    <span
      v-if="state.loadingIconName"
      class="puik-file-upload-item__loading-icon material-icons-round"
      >{{ state.loadingIconName }}</span
    >
    <img
      v-else-if="state.image"
      class="puik-file-upload-item__img"
      :src="state.image.src"
    />
    <span
      v-else-if="state.documentIconName"
      class="puik-file-upload-item__doc-icon material-icons-round"
      aria-hidden="true"
      role="img"
      >{{ state.documentIconName }}</span
    >
    <div class="puik-file-upload-item__footer puik-file-upload-item-footer">
      <progress
        v-if="!props.uploading.status.ended"
        class="puik-file-upload-item-footer__progress"
        :value="props.uploading.status.progress * 100"
        max="100"
      ></progress>
      <span class="puik-file-upload-item-footer__name">{{
        props.uploading.file.name
      }}</span>
      <button
        v-if="props.uploading.status.ended && !props.closing"
        class="puik-file-upload-item-footer__close-wrapper"
        :aria-label="props.accessibilityRemoveLabel"
        @click="removeItem"
      >
        <span class="puik-file-upload-item-footer__close-btn">
          <span
            class="puik-file-upload-item-footer__close-icon material-icons-round"
            >cancel</span
          >
        </span>
      </button>
    </div>
  </article>
</template>
