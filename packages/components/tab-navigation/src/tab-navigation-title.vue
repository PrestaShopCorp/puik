<template>
  <button
    :class="[
      'puik-tab-navigation__title',
      {
        'puik-tab-navigation__title--selected':
          position == currentTab?.currentPosition.value,
      },
    ]"
    @click="handleclick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { currentTabKey } from './tab-navigation'
import { tabNavigationTitleProps } from './tab-navigation-title'
defineOptions({
  name: 'PuikTabNavigationTitle',
})

const props = defineProps(tabNavigationTitleProps)

const currentTab = inject(currentTabKey, null)
const handleclick = () => {
  currentTab?.handleTabClick(props.position)
}
</script>
