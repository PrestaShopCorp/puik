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
        'puik-tab-navigation__title--disabled': disabled,
      },
    ]"
    @click="handleclick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue'
import { currentTabKey } from './tab-navigation'
import { tabNavigationTitleProps } from './tab-navigation-title'
defineOptions({
  name: 'PuikTabNavigationTitle',
})

const props = defineProps(tabNavigationTitleProps)

const currentTab = inject(currentTabKey, null)
const name = ref(currentTab?.name)
const handleclick = () => {
  if (!props.disabled) currentTab?.handleTabClick(props.position)
}

const isCurrentTab = computed(() => {
  return props.position == currentTab?.currentPosition.value
})

watch(
  () => isCurrentTab.value,
  () => {
    if (isCurrentTab.value && props.disabled) {
      if (currentTab?.keyEventDirection.value === 'right') {
        currentTab?.currentPosition.value === currentTab?.numberOfTabs.value
          ? currentTab?.handleTabClick(1)
          : currentTab?.handleTabClick(props.position + 1)
      }
      if (currentTab?.keyEventDirection.value === 'left') {
        currentTab?.currentPosition.value === 1
          ? currentTab?.handleTabClick(currentTab?.numberOfTabs.value)
          : currentTab?.handleTabClick(props.position - 1)
      }
    }
  }
)
</script>
