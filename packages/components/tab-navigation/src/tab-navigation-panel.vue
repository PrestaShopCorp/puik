<template>
  <div
    v-if="isCurrentTab"
    :id="`${name}-panel-${position}`"
    role="tabpanel"
    :tabindex="isCurrentTab ? 0 : -1"
    :aria-labelledby="`${name}-position-${position}`"
    class="puik-tab-navigation__panel"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { currentTabKey } from './tab-navigation'
import { type TabNavigationPanelProps } from './tab-navigation-panel'

defineOptions({
  name: 'PuikTabNavigationPanel',
})

const props = defineProps<TabNavigationPanelProps>()

const currentTab = inject(currentTabKey)
const name = ref(currentTab?.name)
const isCurrentTab = computed(() => {
  return props.position == currentTab?.currentPosition.value
})
</script>
