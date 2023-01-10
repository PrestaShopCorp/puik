<template>
  <div
    class="puik-tooltip"
    tabindex="0"
    :aria-describedby="id"
    @mouseover="updateTooltip"
  >
    <div ref="tooltipWrapper">
      <slot></slot>
    </div>
    <div
      v-show="!isDisabled"
      :id="id"
      ref="tooltip"
      class="puik-tooltip__tip"
      role="tooltip"
      :style="{ 'z-index': zindex }"
    >
      <span v-if="$slots.title || title" class="puik-tooltip__tip__title"
        ><slot name="title">{{ title }}</slot></span
      >
      <span
        v-if="$slots.description || description"
        class="puik-tooltip__tip__description"
        ><slot name="description">{{ description }}</slot></span
      >
      <div class="puik-tooltip__tip__arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { createPopper } from '@popperjs/core'
import { generateId } from '@puik/utils'
import { tooltipProps } from './tooltip'
import type { Instance as PopperInstance } from '@popperjs/core'
defineOptions({
  name: 'PuikTooltip',
})

const tooltipWrapper = ref<HTMLElement | null>(null)
const tooltip = ref<HTMLElement | null>(null)
let popperInstance: PopperInstance | null = null
const id = `puik-tooltip-${generateId()}`

const props = defineProps(tooltipProps)

const updateTooltip = () => {
  popperInstance?.update()
}

onMounted(() => {
  if (tooltipWrapper.value && tooltip.value) {
    popperInstance = createPopper(tooltipWrapper.value, tooltip.value, {
      placement: props.position,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 12],
          },
        },
      ],
    })
  }
})
</script>
