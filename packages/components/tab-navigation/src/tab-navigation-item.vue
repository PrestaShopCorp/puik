<template>
  <div class="puik-tab-navigation-item">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { tabNavigationItemProps } from './tab-navigation-item'

defineOptions({
  name: 'PuikTabNavigationItem',
})

const props = defineProps(tabNavigationItemProps)
</script>
