<template>
  <DialogRoot>
    <slot />
  </DialogRoot>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { DialogRoot } from 'radix-vue';
import {
  type ModalProps,
  PuikModalVariants,
  PuikModalSizes,
  ModalInjectionKey
} from './modal';

defineOptions({
  name: 'PuikModal'
});

const props = withDefaults(defineProps<ModalProps>(), {
  variant: PuikModalVariants.Feedback,
  size: PuikModalSizes.Medium
});

provide(ModalInjectionKey, props);
</script>
