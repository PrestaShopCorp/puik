<template>
  <component
    :is="tag"
    class="puik-skeleton-loader material-icons-round"
    :class="[`puik-skeleton-loader--${variant}`]"
    :style="{ width, height }"
  ></component>
</template>

<script setup lang="ts">
import { skeletonLoaderProps } from './skeleton-loader'
defineOptions({
  name: 'PuikSkeletonLoader',
})

defineProps(skeletonLoaderProps)
</script>
