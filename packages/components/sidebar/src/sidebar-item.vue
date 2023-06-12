<template>
  <div
    class="puik-sidebar-item"
    :class="{ 'puik-sidebar-item--active': active }"
  >
    <puik-button
      :aria-label="title"
      fluid
      variant="text"
      class="puik-sidebar-item__button"
      :to="props.to"
      :href="props.href"
    >
      <puik-icon v-if="icon" :icon="icon" font-size="1.25rem" />
      <span v-if="sidebarValues?.extended.value">{{ title }}</span>
    </puik-button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import PuikButton from '../../button'
import PuikIcon from '../../icon'
import { sidebarKey } from './sidebar'
import { sidebarItemProps } from './sidebar-item'
defineOptions({
  name: 'PuikSidebarItem',
})
const props = defineProps(sidebarItemProps)
const sidebarValues = inject(sidebarKey, null)
</script>
