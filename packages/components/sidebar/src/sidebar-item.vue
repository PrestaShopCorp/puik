<template>
  <div
    v-if="isMenuItem"
    class="puik-sidebar-item"
    :class="{ 'puik-sidebar-item--active': active }"
  >
    <puik-button
      :aria-label="title"
      fluid
      variant="text"
      class="puik-sidebar-item__button"
      :to="to"
      :href="href"
    >
      <span>{{ title }}</span>
    </puik-button>
  </div>
  <div
    v-else
    class="puik-sidebar-item"
    :class="{ 'puik-sidebar-item--active': active }"
  >
    <puik-button
      :aria-label="title"
      fluid
      variant="text"
      class="puik-sidebar-item__button"
      :left-icon="icon"
      :to="to"
      :href="href"
    >
      <span v-if="isExpanded">{{ title }}</span>
    </puik-button>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import PuikButton from '../../button'
import { sidebarKey, groupItemKey } from './sidebar'
import { sidebarItemProps } from './sidebar-item'

defineOptions({
  name: 'PuikSidebarItem',
})

defineProps(sidebarItemProps)
const sidebarValues = inject(sidebarKey, null)
const groupItemValues = inject(groupItemKey, false)

const isExpanded = computed(() => sidebarValues?.extended.value)
const isMenuItem = computed(
  () => !sidebarValues?.extended.value && groupItemValues
)
</script>
