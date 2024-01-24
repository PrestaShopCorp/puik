<template>
  <div
    class="progress-bar__container"
    :data-test="dataTest"
  >
    <div
      :class="barClass"
      :style="{ width: `${percentage}%` }"
      :data-test="dataTest != undefined ? `bar-${dataTest}` : undefined"
      class="progress-bar__content"
    />
  </div>
</template>

<script setup lang="ts">
import { type ProgressBarProps } from './progress-bar';
defineOptions({
  name: 'PuikProgressBar'
});

defineProps<ProgressBarProps>();
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-progress-bar.scss';
</style>
