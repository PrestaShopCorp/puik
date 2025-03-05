<template>
  <ToastRoot
    v-bind="forwarded"
    :class="['puik-snackbar-root', `puik-snackbar-root--${variant}`, `puik-snackbar-root--swipe-${swipeAnimation}`]"
    @update:open="(openstate: boolean) => {
      if(props.onOpenChange){
        props.onOpenChange(openstate);
      }
    }"
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
      <slot name="action" />
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
import { PuikIcon } from '@prestashopcorp/puik-components';
import { PuikSnackbarVariants, PuikSnackbarSwipeAnimations } from './snackbar';
import { type SnackbarProps, SnackbarEmits } from './snackbar';
import { generateId } from '@prestashopcorp/puik-utils';

defineOptions({
  name: 'PuikSnackbar'
});

const props = withDefaults(defineProps<SnackbarProps>(), {
  id: `puik-snackbar-${generateId()}`,
  variant: PuikSnackbarVariants.Default,
  swipeAnimation: PuikSnackbarSwipeAnimations.Right
});
const emits = defineEmits<SnackbarEmits>();
const forwarded = useForwardPropsEmits(props, emits);

</script>

<style lang="postcss">
@import '@prestashopcorp/puik-theme/src/base.postcss';
@import '@prestashopcorp/puik-theme/src/puik-snackbar.postcss';
@import '@prestashopcorp/puik-theme/src/puik-button.postcss';
@import '@prestashopcorp/puik-theme/src/puik-icon.postcss';
</style>
