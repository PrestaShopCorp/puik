<template>
  <div
    class="puik-accordion"
    :class="{
      'puik-accordion--expanded': isExpanded,
    }"
  >
    <button
      :aria-expanded="isExpanded"
      :aria-controls="id"
      class="puik-accordion__title"
      @click="onClick"
    >
      <slot name="title">
        {{ title }}
      </slot>

      <puik-icon :icon="icon" :font-size="20"></puik-icon>
    </button>
    <div v-show="isExpanded" :id="id" class="puik-accordion__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { generateId } from '@puik/utils'
import { PuikIcon } from '@puik/components/icon'
import { accordionGroupKey } from './accordion-group'
import { accordionProps } from './accordion'
defineOptions({
  name: 'PuikAccordion',
})
const emit = defineEmits(['click'])

const id = `puik-accordion-${generateId()}`

const props = defineProps(accordionProps)
const { accordionsList, handleChange, expandedAccordions } =
  inject(accordionGroupKey)!

const isExpanded = computed(() => {
  if (Array.isArray(expandedAccordions.value)) {
    return expandedAccordions.value.some((name) => props.name === name)
  }

  return props.name === expandedAccordions.value
})

accordionsList.value.push({ name: props.name, expanded: isExpanded.value })

const icon = computed(() =>
  isExpanded.value ? 'keyboard_arrow_down' : 'keyboard_arrow_up'
)

function onClick() {
  handleChange(props.name)
  emit('click', props.name)
}
</script>
