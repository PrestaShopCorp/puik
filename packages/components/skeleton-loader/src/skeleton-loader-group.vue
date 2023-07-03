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
import { useLocale } from '@puik/hooks'
import { skeletonLoaderGroupProps } from './skeleton-loader-group'
defineOptions({
  name: 'PuikSkeletonLoaderGroup',
})

defineProps(skeletonLoaderGroupProps)
const { t } = useLocale()
</script>
