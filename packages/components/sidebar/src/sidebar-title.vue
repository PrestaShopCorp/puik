<template>
  <h3 v-if="isExpanded" class="puik-sidebar-title">
    <slot></slot>
  </h3>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { sidebarKey } from './sidebar'

defineOptions({
  name: 'PuikSidebarTitle',
})

const sidebarValues = inject(sidebarKey, null)
const isExpanded = computed(() => sidebarValues?.extended.value)
</script>
