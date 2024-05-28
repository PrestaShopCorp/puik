<template>
  <component
    :is="tag"
    class="puik-skeleton-loader material-icons-round"
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

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-skeleton-loader.scss';
</style>
