<template>
  <div class="puik-sidebar-group-item">
    <puik-accordion
      v-if="sidebarValues?.extended.value"
      :title="title"
      :name="accordionName"
      :icon="icon"
    >
      <slot></slot>
    </puik-accordion>
    <div v-else>
      <puik-button
        variant="text"
        fluid
        class="puik-sidebar-group-item__collapsed-button"
      >
        <puik-icon :icon="icon" font-size="1.25rem"></puik-icon>
      </puik-button>
      <!-- TODO: Menu goes here -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { generateId } from '@puik/utils'
import PuikAccordion from '../../accordion'
import PuikButton from '../../button'
import PuikIcon from '../../icon'
import { sidebarKey } from './sidebar'
import { sidebarGroupItemProps } from './sidebar-group-item'

defineOptions({
  name: 'PuikSidebarGroupItem',
})
const props = defineProps(sidebarGroupItemProps)

const accordionName = props.name ?? `sidebar-item-${generateId()}`
const sidebarValues = inject(sidebarKey, null)
</script>
