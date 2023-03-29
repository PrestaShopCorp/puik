<template>
  <Dialog :open="isOpenRef" class="puik-modal" @close="sendCloseModalEvent()">
    <div class="backdrop" aria-hidden="false" />

    <div class="shit">
      <DialogPanel class="dialogPanel" :class="[getModalSizeClass()]">
        <header class="header">
          <puik-icon
            v-if="ModalStyle.Destructive === modalStyle"
            class="header__icon header__icon--destructive"
            :icon="DESTRUCTIVE_ICON_NAME"
          />
          <puik-icon
            v-else-if="iconName"
            class="header__icon"
            :class="[getModalStyleClass()]"
            :icon="iconName"
          />

          <puik-tooltip class="header__title">
            <h2 class="title">{{ title }}</h2>
            <template #description>{{ title }}</template>
          </puik-tooltip>

          <puik-button
            v-if="hasCloseButton"
            class="header__close-button"
            variant="error"
            @click="sendCloseModalEvent()"
          >
            <puik-icon icon="close" />
          </puik-button>
        </header>
        <div class="content">
          <slot name="content"></slot>
        </div>
        <footer class="footer">
          <puik-button
            class="footer__button--second"
            :variant="secondButtonVariant"
            @click="$emit('button-second')"
          >
            {{ secondButtonText }}
          </puik-button>
          <puik-button
            class="footer__button--main"
            :variant="mainButtonVariant"
            @click="$emit('button-main')"
          >
            {{ mainButtonText }}
          </puik-button>
          <span class="footer__spacer" />
          <puik-button
            v-if="sideButtonText"
            class="footer__button--side"
            variant="text"
            @click="$emit('button-side')"
          >
            {{ sideButtonText }}
          </puik-button>
        </footer>
      </DialogPanel>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { PuikButton, PuikIcon, PuikTooltip } from '../..'
import { modalProps, ModalStyle, ModalSize, modalEmits } from './modal'

defineOptions({
  name: 'PuikModal',
})

const props = defineProps(modalProps)
const emit = defineEmits(modalEmits)
const isOpenRef = toRef(props, 'isOpen')
const DESTRUCTIVE_ICON_NAME = 'warning'

const mainButtonVariant = [
  ModalStyle.Destructive,
  ModalStyle.Dangerous,
].includes(props.modalStyle)
  ? 'destructive'
  : 'primary'
const secondButtonVariant = [
  ModalStyle.Destructive,
  ModalStyle.Dangerous,
].includes(props.modalStyle)
  ? 'tertiary'
  : 'secondary'

const getModalStyleClass = () => {
  switch (props.modalStyle) {
    case ModalStyle.Dangerous:
      return 'header__icon--dangerous'
    case ModalStyle.Dialog:
      return 'header__icon--dialog'
    case ModalStyle.Feedback:
    default:
      return 'header__icon--feedback'
  }
}

const getModalSizeClass = () => {
  switch (props.modalSize) {
    case ModalSize.Large:
      return 'dialogPanel--large'
    case ModalSize.Medium:
      return 'dialogPanel--medium'
    case ModalSize.Small:
    default:
      return 'dialogPanel--small'
  }
}

const sendCloseModalEvent = () => {
  if (props.hasCloseButton) {
    return emit('close')
  }
}
</script>
