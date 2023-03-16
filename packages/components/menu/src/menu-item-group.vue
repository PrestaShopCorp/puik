<template>
  <section class="puik-menu-item-group">
    <h4 class="puik-menu-item-group__title">
      {{ title }}
    </h4>
    <div class="puik-menu-item-group__items">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
import { menuItemGroupProps } from './menu-item-group'
defineOptions({
  name: 'PuikMenuItemGroup',
})
defineProps(menuItemGroupProps)
</script>
