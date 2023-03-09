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
const expandedPanels = ref<string | string[] | null>(props.modelValue)

watch(props, () => {
  expandedPanels.value = props.modelValue
  panelsList.value.forEach((panel) => {
    panel.expanded = Array.isArray(expandedPanels.value)
      ? expandedPanels.value.some((name) => name === panel.name)
      : panel.name === expandedPanels.value
  })
})

const panelsList = ref<ExpansionPanelState[]>([])

function handleChange(name: string) {
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

  expandedPanels.value = props.multiple ? newSelection : newSelection[0] ?? null
  emit('update:modelValue', expandedPanels.value)
}

provide(expansionPanelGroupKey, {
  panelsList,
  handleChange,
  expandedPanels,
})
</script>
