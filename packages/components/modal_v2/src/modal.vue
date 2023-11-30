<template>
  <DialogRoot>
    <DialogTrigger>
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="puik-modal-v2-overlay">
        <DialogContent
          class="puik-modal-v2"
          :class="[`puik-modal-v2--${size}`]"
        >
          <div class="puik-modal-v2__header">
            <div class="puik-modal-v2__header__title">
              <puik-icon
                v-if="titleIcon || PuikModalVariantsV2.Destructive === variant"
                class="puik-modal-v2__header__icon"
                :class="[`puik-modal-v2__header__icon--${variant}`]"
                :icon="getTitleIconName ?? ''"
                font-size="1.5rem"
              />
              <DialogTitle
                ref="modalTitleElem"
                class="puik-h2"
                :data-test="
                  dataTest != undefined ? `title-${dataTest}` : undefined
                "
              >
                {{ title }}
              </DialogTitle>
            </div>
            <DialogClose
              v-if="PuikModalVariantsV2.Dialog !== variant"
              :data-test="
                dataTest != undefined ? `closeButton-${dataTest}` : undefined
              "
            >
              <puik-button
                variant="text"
                class="puik-modal-v2__header__close"
              >
                <puik-icon
                  icon="close"
                  font-size="1.5rem"
                />
              </puik-button>
            </DialogClose>
          </div>
          <div class="puik-modal-v2__content">
            <slot />
          </div>
          <div class="puik-modal-v2__actions">
            <DialogClose>
              <puik-button
                v-if="secondButtonText"
                class="puik-modal__dialogPanelContainer__dialogPanel__footer__button--second"
                variant="text"
                :data-test="
                  dataTest != undefined ? `secondButton-${dataTest}` : undefined
                "
                @click="$emit('secondaryClicked')"
              >
                {{ secondButtonText }}
              </puik-button>
            </DialogClose>
            <DialogClose>
              <puik-button
                v-if="mainButtonText"
                :variant="variant === PuikModalVariantsV2.Destructive ? PuikButtonVariants.Destructive : PuikButtonVariants.Primary"
                :disabled="isMainButtonDisabled"
                :data-test="
                  dataTest != undefined ? `mainButton-${dataTest}` : undefined
                "
                @click="$emit('primaryClicked')"
              >
                {{ mainButtonText }}
              </puik-button>
            </DialogClose>
          </div>
        </DialogContent>
      </DialogOverlay>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue';
import { DialogRoot, DialogTitle, DialogOverlay, DialogPortal, DialogContent, DialogClose, DialogTrigger } from 'radix-vue';
import { useWindowSize } from '@vueuse/core';
import { PuikButton, PuikButtonVariants } from '@prestashopcorp/puik-components/button';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import { isEllipsisActive } from '@prestashopcorp/puik-utils';
import {
  type ModalPropsV2,
  PuikModalVariantsV2,
  PuikModalSizesV2,
  modalEmitsV2,
  DESTRUCTIVE_ICON_NAME_V2
} from './modal';

defineOptions({
  name: 'PuikModal'
});

const props = withDefaults(defineProps<ModalPropsV2>(), {
  variant: PuikModalVariantsV2.Feedback,
  size: PuikModalSizesV2.Medium
});
defineEmits(modalEmitsV2);

const getTitleIconName = computed(() => {
  return PuikModalVariantsV2.Destructive === props.variant
    ? DESTRUCTIVE_ICON_NAME_V2
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

/* const hasFooter = !!(
  props.mainButtonText ||
  props.secondButtonText ||
  props.sideButtonText
); */
</script>
