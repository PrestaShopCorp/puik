<template>
  <div
    class="relative w-[166px] h-[158px] border border-lightBlue500 rounded text-center flex justify-between flex-col items-center pointer-events-none form__filedAttachment&#45;&#45;card"
  >
    <span
      v-if="state.loadingIconName"
      class="material-icons-round text-mainFont100 mt-1 text-8xl"
      >{{ state.loadingIconName }}</span
    >
    <img
      v-else-if="state.image"
      class="w-full h-[120px] object-cover"
      :src="state.image.src"
    />
    <span
      v-else-if="state.documentIconName"
      class="material-icons-round text-mainFont500 mt-1 text-8xl"
      aria-hidden="true"
      role="img"
      >{{ state.documentIconName }}</span
    >
    <div class="flex justify-between flex-col w-full px-2">
      <progress
        v-if="!props.uploading.status.ended"
        class="dropzone__progress w-full h-1 rounded-full bg-mainFont50 overflow-hidden"
        :value="props.uploading.status.progress * 100"
        max="100"
      ></progress>
      <span
        class="py-2 text-center whitespace-nowrap text-ellipsis overflow-hidden w-full"
        >{{ props.uploading.file.name }}</span
      >
      <div class="pointer-events-auto" @click="removeItem">
        <button
          v-if="props.uploading.status.ended && !props.closing"
          class="text-mainFont500 hover:text-mainFont700 focus-visible:text-mainFont700 text-2xl absolute top-0 -translate-y-1/2 translate-x-1/2 right-0 leading-[0px] rounded form__fieldAttachment&#45;&#45;remove focus-visible:outline-mainFocus focus-visible:ring-offset-[-1px] focus-visible:rounded"
          :aria-label="props.accessibilityRemoveLabel"
          @click="$event.preventDefault()"
        >
          <span
            class="material-icons-round bg-white border border-white rounded-full"
            >cancel</span
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import type { PropType } from 'vue'
import type { UploadingFileProps } from '../file-upload-types'

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
