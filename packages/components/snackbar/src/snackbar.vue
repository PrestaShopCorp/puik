<template>
  <ToastRoot
    v-bind="forwarded"
    :class="['puik-snackbar-root',`puik-snackbar-root--${variant}`]"
  >
    <ToastTitle class="puik-snackbar-title">
      {{ text }}
    </ToastTitle>
    <ToastAction
      class="puik-snackbar-action"
      as-child
      alt-text="alt-text"
    >
      <slot name="action">
        <puik-button
          size="md"
          variant="text-reverse"
        >
          undo
        </puik-button>
      </slot>
    </ToastAction>
    <ToastClose
      v-if="hasCloseButton"
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
import { useForwardPropsEmits, ToastAction, ToastClose, ToastTitle, ToastRoot } from 'radix-vue';
import { type SnackbarProps, SnackbarEmits } from './snackbar';
import { PuikSnackbarVariants } from './snackbar';
import { PuikButton, PuikIcon } from '@prestashopcorp/puik-components';

defineOptions({
  name: 'PuikSnackbar'
});

const props = withDefaults(defineProps<SnackbarProps>(), {
  variant: PuikSnackbarVariants.Default
});
const emits = defineEmits<SnackbarEmits>();
const forwarded = useForwardPropsEmits(props, emits);

</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-snackbar.scss';
@use '@prestashopcorp/puik-theme/src/puik-button.scss';
</style>
