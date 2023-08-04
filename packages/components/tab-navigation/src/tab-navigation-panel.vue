<template>
  <div class="puik-tab-navigation-panel">
    puik tab panel
    <slot />
  </div>
</template>

<script setup lang="ts">
import { tabNavigationPanelProps } from './tab-navigation-panel'

defineOptions({
  name: 'PuikTabNavigationPanel',
})

const props = defineProps(tabNavigationPanelProps)
</script>
