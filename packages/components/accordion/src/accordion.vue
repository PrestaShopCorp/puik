<template>
  <div
    class="puik-accordion"
    :class="{
      'puik-accordion--expanded': isExpanded,
      'puik-accordion--disabled': disabled,
    }"
  >
    <button
      :aria-expanded="isExpanded"
      :aria-controls="id"
      class="puik-accordion__header"
      :disabled="disabled"
      @click="onClick"
    >
      <puik-icon
        v-if="icon"
        class="puik-accordion__header__icon"
        :icon="icon"
        :font-size="24"
      ></puik-icon>
      <div class="puik-accordion__header__content">
        <div class="puik-accordion__header__content__title">{{ title }}</div>
        <div class="puik-accordion__header__content__sub-title">
          {{ subTitle }}
        </div>
      </div>
      <puik-icon
        class="puik-accordion__header__expand__icon"
        :icon="expandIcon"
        :font-size="24"
      ></puik-icon>
    </button>

    <hr v-if="isExpanded && !dense" class="puik-accordion__divider" />

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
import { accordionProps, accordionEmits } from './accordion'
defineOptions({
  name: 'PuikAccordion',
})
const emit = defineEmits(accordionEmits)

const id = `puik-accordion-${generateId()}`

const props = defineProps(accordionProps)
const { accordionsList, handleChange, expandedAccordions, dense } =
  inject(accordionGroupKey)!

const isExpanded = computed(() => {
  if (Array.isArray(expandedAccordions.value)) {
    return expandedAccordions.value.some((name) => props.name === name)
  }

  return props.name === expandedAccordions.value
})

accordionsList.value.push({ name: props.name, expanded: isExpanded.value })

const expandIcon = computed(() =>
  isExpanded.value ? props.collapseIcon : props.expandIcon
)

function onClick() {
  handleChange(props.name)
  emit('click', props.name)
}
</script>
