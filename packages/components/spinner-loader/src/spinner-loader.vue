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
    />
    <span
      v-if="label"
      class="puik-spinner-loader__label"
    >
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
import {
  PuikSpinnerLoaderColors,
  PuikSpinnerLoaderPositions,
  PuikSpinnerLoaderSizes,
  type SpinnerLoaderProps
} from './spinner-loader';

defineOptions({
  name: 'PuikSpinnerLoader'
});

withDefaults(defineProps<SpinnerLoaderProps>(), {
  size: PuikSpinnerLoaderSizes.Medium,
  color: PuikSpinnerLoaderColors.Primary,
  position: PuikSpinnerLoaderPositions.Bottom,
  dataTest: 'spinner-loader'
});
</script>
