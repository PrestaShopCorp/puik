<template>
  <div class="progress-bar__container">
    <div
      :class="barClass"
      :style="{ width: `${percentage}%` }"
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
