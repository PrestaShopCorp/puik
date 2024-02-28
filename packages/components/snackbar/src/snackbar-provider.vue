<template>
  <ToastProvider v-bind="props">
    <slot />
    <ToastViewport
      v-bind="$attrs"
      :class="[
        'puik-snackbar-viewport',
        `puik-snackbar-viewport--${positionX}`,
        `puik-snackbar-viewport--${positionY}`,
      ]"
    />
  </ToastProvider>
</template>

<script setup lang="ts">
import { SnackbarProviderProps, PuikSnackbarSwipeDirections, PuikSnackbarPositionsX, PuikSnackbarPositionsY } from './snackbar-provider';
import { ToastProvider, ToastViewport } from 'radix-vue';
defineOptions({
  name: 'PuikSnackbarProvider'
});

const props = withDefaults(defineProps<SnackbarProviderProps>(), {
  duration: 5000,
  label: 'Notification',
  swipeDirection: PuikSnackbarSwipeDirections.Right,
  swipeThreshold: 50,
  positionX: PuikSnackbarPositionsX.Center,
  positionY: PuikSnackbarPositionsY.Down
});
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-snackbar-provider.scss';
</style>
