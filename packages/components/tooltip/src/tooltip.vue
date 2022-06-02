<template>
  <div class="puik-tooltip" tabindex="0" @mouseover="updateTooltip">
    <span ref="icon" class="puik-tooltip__icon"> help_outline </span>
    <div ref="tooltip" class="puik-tooltip__tip" role="tooltip">
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
import { tooltipProps } from './tooltip'
import type { Instance as PopperInstance } from '@popperjs/core'
defineOptions({
  name: 'PuikTooltip',
})

const icon = ref<HTMLElement | null>(null)
const tooltip = ref<HTMLElement | null>(null)
let popperInstance: PopperInstance | null = null

const props = defineProps(tooltipProps)

const updateTooltip = () => {
  popperInstance?.update()
}

onMounted(() => {
  if (icon.value && tooltip.value) {
    popperInstance = createPopper(icon.value, tooltip.value, {
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
