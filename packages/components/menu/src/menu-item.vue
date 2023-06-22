<template>
  <div class="puik-menu-item">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { menuItemProps } from './menu-item'

defineOptions({
  name: 'PuikMenuItem',
})
defineProps(menuItemProps)
</script>
