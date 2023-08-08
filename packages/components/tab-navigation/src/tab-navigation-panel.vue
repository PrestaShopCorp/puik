<template>
  <div
    v-show="position == currentTab?.currentPosition.value"
    class="puik-tab-navigation__panel"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { currentTabKey } from './tab-navigation'
import { tabNavigationPanelProps } from './tab-navigation-panel'

defineOptions({
  name: 'PuikTabNavigationPanel',
})

const props = defineProps(tabNavigationPanelProps)
const currentTab = inject(currentTabKey)
</script>
