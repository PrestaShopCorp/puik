<template>
  <Dialog
    :open="isOpen"
    class="puik-modal"
    :class="[`puik-modal--${variant}`, `puik-modal--${size}`]"
    :data-test="dataTest"
    @close="sendCloseModalEvent()"
  >
    <div class="puik-modal__dialogPanelContainer">
      <DialogPanel
        tabindex="0"
        class="puik-modal__dialogPanelContainer__dialogPanel"
      >
        <header
          v-if="title"
          class="puik-modal__dialogPanelContainer__dialogPanel__header"
        >
          <puik-icon
            v-if="getTitleIconName"
            class="puik-modal__dialogPanelContainer__dialogPanel__header__icon"
            :icon="getTitleIconName ?? ''"
            :font-size="ICON_SIZE"
          />

          <h2
            class="puik-modal__dialogPanelContainer__dialogPanel__header__title"
            :data-test="dataTest != undefined ? `title-${dataTest}` : undefined"
          >
            {{ title }}
          </h2>

          <puik-button
            v-if="PuikModalVariants.Dialog !== variant"
            class="puik-modal__dialogPanelContainer__dialogPanel__header__close-button"
            variant="text"
            force-legacy-text-variant
            :data-test="
              dataTest != undefined ? `closeButton-${dataTest}` : undefined
            "
            @click="sendCloseModalEvent()"
          >
            <puik-icon icon="close" :font-size="ICON_SIZE" />
          </puik-button>
        </header>
        <div
          :class="[
            'puik-modal__dialogPanelContainer__dialogPanel__content',
            'puik-scrollbar',
            {
              'puik-modal__dialogPanelContainer__dialogPanel__content--with-footer':
                hasFooter,
            },
          ]"
        >
          <slot />
        </div>
        <footer
          v-if="hasFooter"
          class="puik-modal__dialogPanelContainer__dialogPanel__footer puik-scrollbar"
        >
          <puik-button
            v-if="PuikModalVariants.Dialog === variant && sideButtonText"
            class="puik-modal__dialogPanelContainer__dialogPanel__footer__button--side"
            variant="text"
            :disabled="disabledSideButton"
            :data-test="
              dataTest != undefined ? `sideButton-${dataTest}` : undefined
            "
            @click="$emit('button-side')"
          >
            {{ sideButtonText }}
          </puik-button>
          <span
            class="puik-modal__dialogPanelContainer__dialogPanel__footer__spacer"
          />
          <puik-button
            v-if="secondButtonText"
            class="puik-modal__dialogPanelContainer__dialogPanel__footer__button--second"
            :variant="secondButtonVariant"
            :disabled="disabledSecondButton"
            :data-test="
              dataTest != undefined ? `secondButton-${dataTest}` : undefined
            "
            @click="$emit('button-second')"
          >
            {{ secondButtonText }}
          </puik-button>
          <puik-button
            v-if="mainButtonText"
            class="puik-modal__dialogPanelContainer__dialogPanel__footer__button--main"
            :variant="mainButtonVariant"
            :disabled="disabledMainButton"
            :data-test="
              dataTest != undefined ? `mainButton-${dataTest}` : undefined
            "
            @click="$emit('button-main')"
          >
            {{ mainButtonText }}
          </puik-button>
        </footer>
      </DialogPanel>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { PuikButton } from '@prestashopcorp/puik-components/button';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import {
  type ModalProps,
  PuikModalVariants,
  PuikModalSizes,
  modalEmits,
  DESTRUCTIVE_ICON_NAME,
} from './modal';

defineOptions({
  name: 'PuikModal',
});

const ICON_SIZE = 24;

const props = withDefaults(defineProps<ModalProps>(), {
  variant: PuikModalVariants.Feedback,
  size: PuikModalSizes.Small,
  disabledMainButton: false,
  disabledSecondButton: false,
  disabledSideButton: false,
});
const emit = defineEmits(modalEmits);

const getTitleIconName = computed(() => {
  if (props.titleIcon) {
    return props.titleIcon;
  }

  return PuikModalVariants.Destructive === props.variant
    ? DESTRUCTIVE_ICON_NAME
    : undefined;
});

const mainButtonVariant = computed(() => {
  return PuikModalVariants.Destructive === props.variant
    ? 'destructive'
    : 'primary';
});

const secondButtonVariant = computed(() => {
  return PuikModalVariants.Dialog === props.variant ? 'secondary' : 'text';
});

const sendCloseModalEvent = () => {
  if (PuikModalVariants.Dialog !== props.variant) {
    return emit('close');
  }
};

const hasFooter = computed(() => {
  return (props.mainButtonText || props.secondButtonText || props.sideButtonText) ? true : false;
});
</script>
