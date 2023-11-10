<template>
  <component
    :is="tag"
    class="puik-skeleton-loader material-icons-round"
    :class="[`puik-skeleton-loader--${variant}`]"
    :style="{ width, height }"
  ></component>
</template>

<script setup lang="ts">
import {
  PuikSkeletonLoaderVariants,
  type SkeletonLoaderProps,
} from './skeleton-loader'
defineOptions({
  name: 'PuikSkeletonLoader',
})

withDefaults(defineProps<SkeletonLoaderProps>(), {
  variant: PuikSkeletonLoaderVariants.TextMedium,
  tag: 'div',
})
</script>
