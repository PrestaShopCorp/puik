<template>
  <button
    :id="`${name}-position-${position}`"
    role="tab"
    :aria-selected="isCurrentTab"
    :aria-controls="`${name}-panel-${position}`"
    :tabindex="isCurrentTab ? 0 : -1"
    :class="[
      'puik-tab-navigation__title',
      {
        'puik-tab-navigation__title--selected': isCurrentTab,
      },
    ]"
    @click="handleclick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { currentTabKey } from './tab-navigation'
import { tabNavigationTitleProps } from './tab-navigation-title'
defineOptions({
  name: 'PuikTabNavigationTitle',
})

const props = defineProps(tabNavigationTitleProps)

const currentTab = inject(currentTabKey, null)
const name = ref(currentTab?.name)
const handleclick = () => {
  currentTab?.handleTabClick(props.position)
}
const isCurrentTab = computed(() => {
  return props.position == currentTab?.currentPosition.value
})
</script>
