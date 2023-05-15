<template>
  <MenuItem
    v-slot="{ active, disabled, close }"
    as="div"
    :disabled="disabled"
    class="puik-menu-item"
  >
    <slot :active="active" :disabled="disabled" :close="close"></slot>
  </MenuItem>
</template>

<script setup lang="ts">
import { MenuItem } from '@headlessui/vue'
import { menuItemProps } from './menu-item'

defineOptions({
  name: 'PuikMenuItem',
})
defineProps(menuItemProps)
</script>
