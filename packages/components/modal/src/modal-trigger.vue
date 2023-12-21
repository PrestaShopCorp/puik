<template>
  <DialogTrigger v-bind="props">
    <slot />
  </DialogTrigger>
</template>

<script setup lang="ts">
import { DialogTrigger, type DialogTriggerProps } from 'radix-vue';

defineOptions({
  name: 'PuikModalTrigger'
});

const props = defineProps<DialogTriggerProps>();
</script>
