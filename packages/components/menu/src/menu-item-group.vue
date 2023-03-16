<template>
  <div class="puik-menu-item-group">
    <h4 class="puik-menu-item-group__title">
      {{ title }}
    </h4>
    <MenuItems class="puik-menu-item-group__items">
      <slot></slot>
    </MenuItems>
  </div>
</template>

<script setup lang="ts">
import { MenuItems } from '@headlessui/vue'
import { menuItemGroupProps } from './menu-item-group'
defineOptions({
  name: 'PuikMenuItemGroup',
})
defineProps(menuItemGroupProps)
</script>
