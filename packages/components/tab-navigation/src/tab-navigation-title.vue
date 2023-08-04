<template>
  <div>
    puik title
    <slot />
  </div>
</template>

<script setup lang="ts">
import { tabNavigationTitleProps } from './tab-navigation-title'
defineOptions({
  name: 'PuikTabNavigationTitle',
})

const props = defineProps(tabNavigationTitleProps)
</script>
