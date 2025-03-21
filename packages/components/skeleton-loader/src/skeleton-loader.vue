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

<style lang="css">
@import '../style/index.css';
</style>
