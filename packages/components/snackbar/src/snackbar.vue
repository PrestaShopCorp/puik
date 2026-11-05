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
    <PuikIcon
      v-if="leadingIcon"
      :icon="leadingIcon"
      font-size="1.5rem"
      class="puik-snackbar-icon"
      aria-hidden
    />
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
      as-child
    >
      <PuikButton
        class="puik-snackbar-close"
        :variant="closeButtonVariant"
        :aria-label="t('puik.snackbar.closeBtnLabel')"
      >
        <PuikIcon
          icon="close"
          font-size="1rem"
          aria-hidden
        />
      </PuikButton>
    </ToastClose>
  </ToastRoot>
</template>

<script setup lang="ts">
import { useForwardPropsEmits, ToastAction, ToastClose, ToastTitle, ToastRoot, ToastDescription } from 'radix-vue';
import { useLocale } from '@prestashopcorp/puik-locale';
import { PuikIcon, PuikButton, PuikButtonVariants } from '@prestashopcorp/puik-components';
import { PuikSnackbarVariants, PuikSnackbarSwipeAnimations, SNACKBAR_ICONS } from './snackbar';
import type {  SnackbarProps, SnackbarEmits } from './snackbar';
import { computed, useId } from 'vue';

defineOptions({
  name: 'PuikSnackbar'
});

const props = withDefaults(defineProps<SnackbarProps>(), {
  variant: PuikSnackbarVariants.Default,
  swipeAnimation: PuikSnackbarSwipeAnimations.Right
});
const { t } = useLocale();
const resolvedId = props.id ?? `puik-snackbar-${useId()}`;
const emits = defineEmits<SnackbarEmits>();
const forwarded = useForwardPropsEmits(props, emits);

const leadingIcon = computed(() => SNACKBAR_ICONS[props.variant as PuikSnackbarVariants]);

// The `default` variant keeps its dark background, so its close button needs the reverse (white) text variant.
const closeButtonVariant = computed(() =>
  props.variant === PuikSnackbarVariants.Default
    ? PuikButtonVariants.TextReverse
    : PuikButtonVariants.Text
);

</script>
