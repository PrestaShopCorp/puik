<template>
  <div class="puik-accordion-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import { accordionGroupProps, accordionGroupKey } from './accordion-group'
import type { AccordionState } from './accordion-group'
defineOptions({
  name: 'PuikAccordionGroup',
})

const props = defineProps(accordionGroupProps)
const emit = defineEmits(['update:modelValue'])
const expandedAccordions = ref<string | string[] | null>(props.modelValue)
const accordionsList = ref<AccordionState[]>([])

watch(props, () => {
  expandedAccordions.value = props.modelValue
  accordionsList.value.forEach((accordion) => {
    accordion.expanded = Array.isArray(expandedAccordions.value)
      ? expandedAccordions.value.some((name) => name === accordion.name)
      : accordion.name === expandedAccordions.value
  })
})

function handleChange(name: string) {
  if (!props.multiple) {
    accordionsList.value.forEach((accordion) => {
      accordion.expanded = accordion.name === name ? !accordion.expanded : false
    })
  } else {
    const accordionIndex = accordionsList.value.findIndex(
      (accordion) => accordion.name === name
    )
    if (accordionIndex < 0) return
    accordionsList.value[accordionIndex].expanded =
      !accordionsList.value[accordionIndex].expanded
  }

  const newSelection = accordionsList.value
    .filter((accordion) => accordion.expanded)
    .map((accordion) => accordion.name)

  expandedAccordions.value = props.multiple
    ? newSelection
    : newSelection[0] ?? null
  emit('update:modelValue', expandedAccordions.value)
}

provide(accordionGroupKey, {
  accordionsList,
  handleChange,
  expandedAccordions,
})
</script>
