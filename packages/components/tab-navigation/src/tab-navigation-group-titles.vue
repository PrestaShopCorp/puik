<template>
  <div>
    puik group titles
    <slot />
  </div>
</template>

<script setup lang="ts">
import { tabNavigationGroupTitlesProps } from './tab-navigation-group-titles'
defineOptions({
  name: 'PuikTabNavigationGroupTitles',
})

const props = defineProps(tabNavigationGroupTitlesProps)
</script>
