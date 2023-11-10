<template>
  <component
    :is="tag"
    class="puik-skeleton-loader-group"
    :aria-label="t('puik.skeletonLoaderGroup.label')"
    aria-live="polite"
    role="status"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { useLocale } from '@prestashopcorp/puik-locale'
import { type SkeletonLoaderGroupProps } from './skeleton-loader-group'
defineOptions({
  name: 'PuikSkeletonLoaderGroup',
})

withDefaults(defineProps<SkeletonLoaderGroupProps>(), {
  tag: 'div',
})
const { t } = useLocale()
</script>
