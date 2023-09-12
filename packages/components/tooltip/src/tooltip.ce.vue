<template>
  <div
    class="puik-tooltip"
    tabindex="0"
    :aria-describedby="id"
    @mouseover="updateTooltip"
    @mouseleave="start"
  >
    <div ref="tooltipWrapper" class="puik-tooltip__wrapper">
      <slot></slot>
    </div>
    <Transition
      enter-from-class="puik-tooltip__transition__enter-from"
      leave-to-class="puik-tooltip__transition__leave-to"
    >
      <div
        v-show="!isDisabled && isVisible"
        :id="id"
        ref="tooltip"
        class="puik-tooltip__tip"
        role="tooltip"
        :style="{ 'z-index': zindex, 'max-width': maxWidth }"
      >
        <div class="puik-tooltip__tip__content">
          <span
            v-if="$slots.title || title"
            class="puik-tooltip__tip__content__title"
            ><slot name="title">{{ title }}</slot></span
          >
          <span
            v-if="$slots.description || description"
            class="puik-tooltip__tip__content__description"
            ><slot name="description">{{ description }}</slot></span
          >
        </div>

        <div class="puik-tooltip__tip__arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { createPopper } from '@popperjs/core'
import { useTimeoutFn } from '@vueuse/core'
import { generateId } from '@puik/utils'
import { tooltipProps } from './tooltip-ce'
import type { Instance as PopperInstance } from '@popperjs/core'

defineOptions({
  name: 'PuikTooltipCe',
})

const tooltipWrapper = ref<HTMLElement | null>(null)
const tooltip = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let popperInstance: PopperInstance | null = null
const id = `puik-tooltip-${generateId()}`

const props = defineProps(tooltipProps)

const { start, stop, isPending } = useTimeoutFn(() => {
  isVisible.value = false
}, props.disappearDelay)

const updateTooltip = () => {
  if (isPending) {
    stop()
  }
  isVisible.value = true
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
