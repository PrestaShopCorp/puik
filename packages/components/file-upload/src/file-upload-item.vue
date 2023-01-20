<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import type { PropType } from 'vue'
import type { UploadingFileProps } from './file-upload-types'

const props = defineProps({
  uploading: {
    type: Object as PropType<UploadingFileProps>,
    required: true,
  },
  closing: {
    type: Boolean,
  },
  deleteFileCb: {
    type: Function as PropType<(fileRelId: number) => Promise<boolean>>,
    required: true,
  },
  accessibilityRemoveLabel: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['removed'])

const state = reactive({
  fileRelId: null as number | null,
  loadingIconName: null as string | null,
  image: null as { src: string } | null,
  documentIconName: null as string | null,
})

onMounted(() => {
  if (/\.(jpe?g|png)$/i.test(props.uploading.file.name)) {
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
    state.fileRelId = resp.fileRelId
    state.loadingIconName = null
  } catch (error) {
    // on error, remove this item
    emit('removed', props.uploading.frontId)
  }
}

const removeItem = async () => {
  if (state.fileRelId === null) return
  const deleted = await props.deleteFileCb(state.fileRelId)
  if (!deleted)
    throw new Error(`file: '${props.uploading.file.name}' cannot be deleted`)
  emit('removed', props.uploading.frontId)
}
</script>

<template>
  <div class="puik-file-upload-item">
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
      <div
        class="puik-file-upload-item-footer__close-wrapper"
        @click="removeItem"
      >
        <button
          v-if="props.uploading.status.ended && !props.closing"
          class="puik-file-upload-item-footer__close-btn"
          :aria-label="props.accessibilityRemoveLabel"
          @click="$event.preventDefault()"
        >
          <span
            class="puik-file-upload-item-footer__close-icon material-icons-round"
            >cancel</span
          >
        </button>
      </div>
    </div>
  </div>
</template>
