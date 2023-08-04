<template>
  <div>
    puik group panel
    {{ selectedIndex ? selectedIndex : 'no index' }}
    <slot />
  </div>
</template>

<script setup lang="ts">
import { tabNavigationGroupPanelsProps } from './tab-navigation-group-panels'
defineOptions({
  name: 'PuikTabNavigationGroupPanels',
})

const props = defineProps(tabNavigationGroupPanelsProps)
</script>
