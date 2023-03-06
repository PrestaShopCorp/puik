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
import { progressBarProps } from './progress-bar'

defineProps(progressBarProps)
</script>
