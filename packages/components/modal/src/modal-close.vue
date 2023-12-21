<template>
  <DialogClose v-bind="props">
    <slot />
  </DialogClose>
</template>

<script setup lang="ts">
import { DialogClose, type DialogCloseProps } from 'radix-vue';

defineOptions({
  name: 'PuikModalClose'
});

const props = defineProps<DialogCloseProps>();
</script>
