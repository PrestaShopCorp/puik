<!--<template>-->
<!--  <div-->
<!--    class="relative w-[166px] h-[158px] border border-lightBlue500 rounded text-center flex justify-between flex-col items-center pointer-events-none form__filedAttachment&#45;&#45;card"-->
<!--  >-->
<!--    <span-->
<!--      v-if="state.loadingIconName"-->
<!--      class="material-icons-round text-mainFont100 mt-1 text-8xl"-->
<!--      >{{ state.loadingIconName }}</span-->
<!--    >-->
<!--    <img-->
<!--      v-else-if="state.image"-->
<!--      class="w-full h-[120px] object-cover"-->
<!--      :src="state.image.src"-->
<!--    />-->
<!--    <span-->
<!--      v-else-if="state.documentIconName"-->
<!--      class="material-icons-round text-mainFont500 mt-1 text-8xl"-->
<!--      aria-hidden="true"-->
<!--      role="img"-->
<!--      >{{ state.documentIconName }}</span-->
<!--    >-->
<!--    <div class="flex justify-between flex-col w-full px-2">-->
<!--      <progress-->
<!--        v-if="!props.attachment.status.ended"-->
<!--        class="dropzone__progress w-full h-1 rounded-full bg-mainFont50 overflow-hidden"-->
<!--        :value="props.attachment.status.progress.value"-->
<!--        :max="props.attachment.status.progress.max"-->
<!--      ></progress>-->
<!--      <span-->
<!--        class="py-2 text-center whitespace-nowrap text-ellipsis overflow-hidden w-full"-->
<!--        >{{ props.attachment.file.name }}</span-->
<!--      >-->
<!--      <div class="pointer-events-auto" @click="removeItem">-->
<!--        <button-->
<!--          v-if="props.attachment.status.ended && !props.closing"-->
<!--          class="text-mainFont500 hover:text-mainFont700 focus-visible:text-mainFont700 text-2xl absolute top-0 -translate-y-1/2 translate-x-1/2 right-0 leading-[0px] rounded form__fieldAttachment&#45;&#45;remove focus-visible:outline-mainFocus focus-visible:ring-offset-[-1px] focus-visible:rounded"-->
<!--          :aria-label="removeLabel"-->
<!--          @click="$event.preventDefault()"-->
<!--        >-->
<!--          <span-->
<!--            class="material-icons-round bg-white border border-white rounded-full"-->
<!--            >cancel</span-->
<!--          >-->
<!--        </button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import {-->
<!--  defineComponent,-->
<!--  onMounted,-->
<!--  reactive,-->
<!--  useContext,-->
<!--} from '@nuxtjs/composition-api'-->
<!--import type { PropType } from '@nuxtjs/composition-api'-->
<!--import type { UploadAttachment } from './upload-attachment-types'-->

<!--export default defineComponent({-->
<!--  name: 'Attachment',-->
<!--  props: {-->
<!--    attachment: {-->
<!--      type: Object as PropType<UploadAttachment>,-->
<!--      required: true,-->
<!--    },-->
<!--    closing: {-->
<!--      type: Boolean,-->
<!--    },-->
<!--  },-->
<!--  setup(props, { emit }) {-->
<!--    const { app, $api } = useContext()-->

<!--    const state = reactive({-->
<!--      fileRelId: null as number | null,-->
<!--      loadingIconName: null as string | null,-->
<!--      image: null as { src: string } | null,-->
<!--      documentIconName: null as string | null,-->
<!--    })-->

<!--    onMounted(() => {-->
<!--      if (/\.(jpe?g|png)$/i.test(props.attachment.file.name)) {-->
<!--        const reader = new FileReader()-->
<!--        reader.addEventListener(-->
<!--          'load',-->
<!--          function () {-->
<!--            state.image = {-->
<!--              src: this.result as string,-->
<!--            }-->
<!--          },-->
<!--          false-->
<!--        )-->
<!--        reader.addEventListener('error', () => {-->
<!--          state.image = null-->
<!--          state.documentIconName = 'image'-->
<!--        })-->
<!--        reader.readAsDataURL(props.attachment.file)-->
<!--        state.loadingIconName = 'image'-->
<!--      } else if (/\.(pdf)$/i.test(props.attachment.file.name)) {-->
<!--        state.loadingIconName = 'picture_as_pdf'-->
<!--        state.documentIconName = 'picture_as_pdf'-->
<!--      } else if (/\.(doc|docx)$/i.test(props.attachment.file.name)) {-->
<!--        state.loadingIconName = 'insert_drive_file'-->
<!--        state.documentIconName = 'insert_drive_file'-->
<!--      }-->
<!--      void waitForUpload()-->
<!--    })-->

<!--    async function waitForUpload() {-->
<!--      try {-->
<!--        const resp = await props.attachment.uploadPromise-->
<!--        state.fileRelId = resp.fileRelId-->
<!--        state.loadingIconName = null-->
<!--      } catch (error) {-->
<!--        // on error, remove this item-->
<!--        emit('removed', props.attachment.frontId)-->
<!--      }-->
<!--    }-->

<!--    const removeItem = async () => {-->
<!--      if (state.fileRelId === null) return-->
<!--      const deleted = await $api.deleteAttachment(-->
<!--        props.attachment.apiTicketId,-->
<!--        state.fileRelId-->
<!--      )-->
<!--      if (!deleted)-->
<!--        throw new Error(-->
<!--          `file: '${props.attachment.file.name}' cannot be deleted`-->
<!--        )-->
<!--      emit('removed', props.attachment.frontId)-->
<!--    }-->

<!--    return {-->
<!--      props,-->
<!--      state,-->
<!--      removeLabel: app.i18n.tc(-->
<!--        'page.contact.form.attachment.accessibility.remove'-->
<!--      ),-->
<!--      removeItem,-->
<!--    }-->
<!--  },-->
<!--})-->
<!--</script>-->
