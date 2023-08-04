<template>
  <div class="puik-tab-navigation">
    <ul class="puik-tab-navigation_tabs-header">
      <!-- <li
        v-for="(tab, index) in tabs"
        :key="index"
        class="puik-tab-navigation_tab"
        @click="handleTabClick(index)"
      >
        <i :class="tab.icon"></i>
        {{ tab.name }}
      </li> -->
    </ul>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { tabNavigationProps } from './tab-navigation'

defineOptions({
  name: 'PuikTabNavigation',
})

const props = defineProps(tabNavigationProps)

interface Tab {
  name: string
  icon: string
}

// const tabs: Tab[] = [
//   {
//     name: 'Tab 1',
//     icon: 'mdi-home',
//     component: () => import('./components/Tab1.vue'),
//   },
//   {
//     name: 'Tab 2',
//     icon: 'mdi-settings',
//     component: () => import('./components/Tab2.vue'),
//   },
// ]

const currentTab = ref(0)

function handleTabClick(index: number) {
  currentTab.value = index
}
</script>
