<template>
  <h3 v-if="sidebarValues?.extended.value" class="puik-sidebar-title">
    <slot></slot>
  </h3>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { sidebarKey } from './sidebar'

defineOptions({
  name: 'PuikSidebarTitle',
})

const sidebarValues = inject(sidebarKey, null)
</script>
