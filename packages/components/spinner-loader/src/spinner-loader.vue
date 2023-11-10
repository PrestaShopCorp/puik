<template>
  <div
    :class="[
      'puik-spinner-loader',
      `puik-spinner-loader--${size}`,
      `puik-spinner-loader--${color}`,
      { 'puik-spinner-loader--right': position === 'right' },
    ]"
    aria-live="polite"
    role="status"
    :data-test="dataTest"
  >
    <div
      class="puik-spinner-loader__spinner"
      aria-hidden="true"
      data-chromatic="ignore"
    ></div>
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
