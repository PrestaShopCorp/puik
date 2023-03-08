<template>
  <div
    class="puik-expansion-panel"
    :class="{
      'puik-expansion-panel--expanded': isExpanded,
    }"
  >
    <button
      :aria-expanded="isExpanded"
      :aria-controls="id"
      class="puik-expansion-panel__title"
      @click="onClick"
    >
      <slot name="title">
        {{ title }}
      </slot>

      <puik-icon :icon="icon" :font-size="20"></puik-icon>
    </button>
    <div v-show="isExpanded" :id="id" class="puik-expansion-panel__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { generateId } from '@puik/utils'
import { PuikIcon } from '@puik/components/icon'
import { expansionPanelGroupKey } from './expansion-panel-group'
import { expansionPanelProps } from './expansion-panel'
defineOptions({
  name: 'PuikExpansionPanel',
})
const emit = defineEmits(['click'])

const id = `puik-expansion-panel-${generateId()}`

const props = defineProps(expansionPanelProps)
const { panelsList, handleChange, selection } = inject(expansionPanelGroupKey)!

const isExpanded = computed(() => {
  if (Array.isArray(selection.value)) {
    return selection.value.some((name) => props.name === name)
  }

  return props.name === selection.value
})

panelsList.value.push({ name: props.name, expanded: isExpanded.value })

const icon = computed(() =>
  isExpanded.value ? 'keyboard_arrow_down' : 'keyboard_arrow_up'
)

function onClick() {
  handleChange(props.name)
  emit('click', props.name)
}
</script>
