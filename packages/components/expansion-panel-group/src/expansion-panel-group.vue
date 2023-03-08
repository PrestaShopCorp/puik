<template>
  <div class="puik-expansion-panel-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import {
  expansionPanelGroupProps,
  expansionPanelGroupKey,
} from './expansion-panel-group'
import type { ExpansionPanelState } from './expansion-panel-group'
defineOptions({
  name: 'PuikExpansionPanelGroup',
})

const props = defineProps(expansionPanelGroupProps)
const emit = defineEmits(['update:modelValue'])
const selection = ref<string | string[] | null>(props.modelValue)

watch(props, () => {
  selection.value = props.modelValue
  panelsList.value.forEach((panel) => {
    panel.expanded = Array.isArray(selection.value)
      ? selection.value.some((name) => name === panel.name)
      : panel.name === selection.value
  })
})

const panelsList = ref<ExpansionPanelState[]>([])

const handleChange = (name: string) => {
  if (!props.multiple) {
    panelsList.value.forEach((panel) => {
      panel.expanded = panel.name === name ? !panel.expanded : false
    })
  } else {
    const panelIndex = panelsList.value.findIndex(
      (panel) => panel.name === name
    )
    if (panelIndex < 0) return
    panelsList.value[panelIndex].expanded =
      !panelsList.value[panelIndex].expanded
  }

  const newSelection = panelsList.value
    .filter((panel) => panel.expanded)
    .map((panel) => panel.name)

  if (props.multiple) {
    selection.value = newSelection
    emit('update:modelValue', selection.value)
  } else {
    selection.value = newSelection.length === 0 ? null : newSelection[0]
    emit(
      'update:modelValue',
      newSelection.length === 0 ? null : selection.value
    )
  }
}

provide(expansionPanelGroupKey, {
  panelsList,
  handleChange,
  selection,
})
</script>
