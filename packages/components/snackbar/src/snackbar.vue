<template>
  <ToastRoot
    v-bind="forwarded"
    :id="resolvedId"
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
import type {  SnackbarProps, SnackbarEmits } from './snackbar';
import { useId } from 'vue';

defineOptions({
  name: 'PuikSnackbar'
});

const props = withDefaults(defineProps<SnackbarProps>(), {
  variant: PuikSnackbarVariants.Default,
  swipeAnimation: PuikSnackbarSwipeAnimations.Right
});
const resolvedId = props.id ?? `puik-snackbar-${useId()}`;
const emits = defineEmits<SnackbarEmits>();
const forwarded = useForwardPropsEmits(props, emits);

</script>
