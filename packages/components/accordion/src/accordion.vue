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
      :data-test="dataTest != undefined ? `button-${dataTest}` : undefined"
      @click="onClick"
    >
      <puik-icon
        v-if="icon"
        class="puik-accordion__header__icon"
        :icon="icon"
        :font-size="24"
        :data-test="dataTest != undefined ? `icon-${dataTest}` : undefined"
      ></puik-icon>
      <div class="puik-accordion__header__content">
        <div
          class="puik-accordion__header__content__title"
          :data-test="dataTest != undefined ? `title-${dataTest}` : undefined"
        >
          {{ title }}
        </div>
        <div
          v-if="subTitle"
          class="puik-accordion__header__content__sub-title"
          :data-test="
            dataTest != undefined ? `subTitle-${dataTest}` : undefined
          "
        >
          {{ subTitle }}
        </div>
      </div>
      <puik-icon
        class="puik-accordion__header__expand__icon"
        icon="keyboard_arrow_down"
        :font-size="24"
      ></puik-icon>
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
import { accordionProps, accordionEmits } from './accordion'
defineOptions({
  name: 'PuikAccordion',
})
const emit = defineEmits(accordionEmits)

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

function onClick() {
  handleChange(props.name)
  emit('click', props.name)
}
</script>
