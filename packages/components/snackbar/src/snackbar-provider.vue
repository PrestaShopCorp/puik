<template>
  <ToastProvider v-bind="props">
    <slot />
    <ToastViewport class="puik-snackbar-viewport" />
  </ToastProvider>
</template>

<script setup lang="ts">
import { SnackbarProviderProps, PuikSnackbarDirections } from './snackbar-provider';
import { ToastProvider, ToastViewport } from 'radix-vue';
defineOptions({
  name: 'PuikSnackbarProvider'
});

const props = withDefaults(defineProps<SnackbarProviderProps>(), {
  duration: 5000,
  label: 'Notification',
  swipeDirection: PuikSnackbarDirections.Right,
  swipeThreshold: 50
});
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-snackbar-provider.scss';
</style>
