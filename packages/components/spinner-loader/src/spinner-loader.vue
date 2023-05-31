<template>
  <div
    :class="[
      'puik-spinner-loader',
      `puik-spinner-loader--${size}`,
      `puik-spinner-loader--${variant}`,
      { 'puik-spinner-loader--right': position === 'right' },
    ]"
  >
    <div class="puik-spinner-loader__spinner"></div>
    <span v-if="label" class="puik-spinner-loader__label">
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { spinnerLoaderProps } from './spinner-loader'

defineOptions({
  name: 'PuikSpinnerLoader',
})

defineProps(spinnerLoaderProps)
</script>
