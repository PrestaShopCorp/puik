<template>
  <div
    role="tablist"
    :aria-label="props.ariaLabel"
    class="puik-tab-navigation__group-titles"
  >
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
