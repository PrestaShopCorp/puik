<template>
  <Dialog
    :open="isOpen"
    class="puik-modal"
    :class="[`puik-modal--${variant}`, `puik-modal--${size}`]"
    @close="sendCloseModalEvent()"
  >
    <div class="puik-modal__dialogPanelContainer">
      <DialogPanel class="puik-modal__dialogPanelContainer__dialogPanel">
        <header
          v-if="title"
          class="puik-modal__dialogPanelContainer__dialogPanel__header"
        >
          <puik-icon
            v-if="titleIcon || PuikModalVariants.Destructive === variant"
            class="puik-modal__dialogPanelContainer__dialogPanel__header__icon"
            :icon="getTitleIconName ?? ''"
            :font-size="24"
          />

          <puik-tooltip
            :is-disabled="!showTitleTooltip"
            class="puik-modal__dialogPanelContainer__dialogPanel__header__title"
          >
            <h2
              ref="modalTitleElem"
              class="title"
            >
              {{ title }}
            </h2>
            <template #description>
              {{ title }}
            </template>
          </puik-tooltip>

          <puik-button
            v-if="PuikModalVariants.Dialog !== variant"
            class="puik-modal__dialogPanelContainer__dialogPanel__header__close-button"
            variant="text"
            @click="sendCloseModalEvent()"
          >
            <puik-icon
              icon="close"
              :font-size="CLOSE_ICON_SIZE"
            />
          </puik-button>
        </header>
        <div class="puik-modal__dialogPanelContainer__dialogPanel__content">
          <slot />
        </div>
        <footer
          v-if="hasFooter"
          class="puik-modal__dialogPanelContainer__dialogPanel__footer"
        >
          <puik-button
            v-if="secondButtonText"
            class="puik-modal__dialogPanelContainer__dialogPanel__footer__button--second"
            :variant="secondButtonVariant"
            @click="$emit('button-second')"
          >
            {{ secondButtonText }}
          </puik-button>
          <puik-button
            v-if="mainButtonText"
            class="puik-modal__dialogPanelContainer__dialogPanel__footer__button--main"
            :variant="mainButtonVariant"
            :disabled="isMainButtonDisabled"
            @click="$emit('button-main')"
          >
            {{ mainButtonText }}
          </puik-button>
          <span
            class="puik-modal__dialogPanelContainer__dialogPanel__footer__spacer"
          />
          <puik-button
            v-if="PuikModalVariants.Dialog === variant && sideButtonText"
            class="puik-modal__dialogPanelContainer__dialogPanel__footer__button--side"
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
import { computed, ref, watch, nextTick } from 'vue';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { useWindowSize } from '@vueuse/core';
import { PuikButton } from '@prestashopcorp/puik-components/button';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import { PuikTooltip } from '@prestashopcorp/puik-components/tooltip';
import { isEllipsisActive } from '@prestashopcorp/puik-utils';
import {
  type ModalProps,
  PuikModalVariants,
  PuikModalSizes,
  modalEmits,
  DESTRUCTIVE_ICON_NAME
} from './modal';

defineOptions({
  name: 'PuikModal'
});

const CLOSE_ICON_SIZE = 24;

const props = withDefaults(defineProps<ModalProps>(), {
  variant: PuikModalVariants.Feedback,
  size: PuikModalSizes.Small
});
const emit = defineEmits(modalEmits);

const getTitleIconName = computed(() => {
  return PuikModalVariants.Destructive === props.variant
    ? DESTRUCTIVE_ICON_NAME
    : props.titleIcon;
});

const { width } = useWindowSize();
const modalTitleElem = ref(null);
const showTitleTooltip = ref(false);

watch(width, async () => {
  await nextTick();
  if (modalTitleElem?.value) {
    showTitleTooltip.value = isEllipsisActive(modalTitleElem.value);
  }
});

const mainButtonVariant =
  PuikModalVariants.Destructive === props.variant ? 'destructive' : 'primary';

const secondButtonVariant =
  PuikModalVariants.Destructive === props.variant ? 'tertiary' : 'secondary';

const sendCloseModalEvent = () => {
  if (PuikModalVariants.Dialog !== props.variant) {
    return emit('close');
  }
};

const hasFooter = !!(
  props.mainButtonText ||
  props.secondButtonText ||
  props.sideButtonText
);
</script>
