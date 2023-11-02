<template>
  <component
    :is="tag"
    v-if="isExpanded"
    class="puik-sidebar-title"
    :data-test="dataTest != undefined ? `sidebarTitle-${dataTest}` : undefined"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { sidebarKey } from './sidebar'
import { sidebarTitleProps } from './sidebar-title'

defineOptions({
  name: 'PuikSidebarTitle',
})

defineProps(sidebarTitleProps)
const sidebarValues = inject(sidebarKey, null)
const isExpanded = computed(() => sidebarValues?.extended.value)
</script>
