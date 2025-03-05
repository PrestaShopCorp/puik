<template>
  <component
    :is="tag"
    class="puik-skeleton-loader"
    :class="[`puik-skeleton-loader--${variant}`]"
    :style="{ width, height }"
  />
</template>

<script setup lang="ts">
import {
  PuikSkeletonLoaderVariants,
  type SkeletonLoaderProps
} from './skeleton-loader';
defineOptions({
  name: 'PuikSkeletonLoader'
});

withDefaults(defineProps<SkeletonLoaderProps>(), {
  variant: PuikSkeletonLoaderVariants.TextMedium,
  tag: 'div'
});
</script>

<style lang="postcss">
@import '@prestashopcorp/puik-theme/src/base.postcss';
@import '@prestashopcorp/puik-theme/src/puik-skeleton-loader.postcss';
</style>
