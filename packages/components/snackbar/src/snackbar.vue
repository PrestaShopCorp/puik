<template>
  <ToastRoot
    v-bind="forwarded"
    :class="['puik-snackbar-root', `puik-snackbar-root--${variant}`, `puik-snackbar-root--swipe-${swipeAnimation}`]"
  >
    <div class="puik-snackbar-message">
      <ToastTitle
        v-if="title"
        class="puik-snackbar-title"
      >
        {{ title }}
      </ToastTitle>
      <ToastDescription class="puik-snackbar-description">
        {{ description }}
      </ToastDescription>
    </div>
    <ToastAction
      class="puik-snackbar-action"
      as-child
      alt-text="alt-text"
    >
      <slot name="action">
        <puik-button
          size="sm"
          variant="text-reverse"
        >
          undo
        </puik-button>
      </slot>
    </ToastAction>
    <ToastClose
      v-if="hasCloseButton"
      class="puik-snackbar-close"
      aria-label="Close"
    >
      <PuikIcon
        icon="close"
        aria-hidden
      />
    </ToastClose>
  </ToastRoot>
</template>

<script setup lang="ts">
import { useForwardPropsEmits, ToastAction, ToastClose, ToastTitle, ToastRoot, ToastDescription } from 'radix-vue';
import { PuikButton, PuikIcon } from '@prestashopcorp/puik-components';
import { PuikSnackbarVariants, PuikSnackbarSwipeAnimations } from './snackbar';
import { type SnackbarProps, SnackbarEmits } from './snackbar';

defineOptions({
  name: 'PuikSnackbar'
});

const props = withDefaults(defineProps<SnackbarProps>(), {
  variant: PuikSnackbarVariants.Default,
  swipeAnimation: PuikSnackbarSwipeAnimations.Right
});
const emits = defineEmits<SnackbarEmits>();
const forwarded = useForwardPropsEmits(props, emits);

</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-snackbar.scss';
@use '@prestashopcorp/puik-theme/src/puik-button.scss';
@use '@prestashopcorp/puik-theme/src/puik-icon.scss';
</style>
