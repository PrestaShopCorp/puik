<template>
  <div class="puik-tab-navigation__group-panels">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { tabNavigationGroupPanelsProps } from './tab-navigation-group-panels'
defineOptions({
  name: 'PuikTabNavigationGroupPanels',
})

// const props = defineProps(tabNavigationGroupPanelsProps)
</script>
