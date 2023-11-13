<template>
  <h4
    class="puik-menu-item-title"
    :data-test="dataTest != undefined ? `title-${dataTest}` : undefined"
  >
    <slot></slot>
  </h4>
</template>

<script setup lang="ts">
import { menuItemTitleProps } from './menu-item-title'

defineOptions({
  name: 'PuikMenuItemTitle',
})
defineProps(menuItemTitleProps)
</script>
