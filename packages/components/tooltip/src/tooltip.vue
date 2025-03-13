<template>
  <div
    class="puik-tooltip"
    tabindex="0"
    :aria-describedby="id"
    :data-test="dataTest"
    @mouseover="updateTooltip"
    @mouseleave="start"
    @focus="updateTooltip"
    @blur="start"
  >
    <div
      ref="tooltipWrapper"
      class="puik-tooltip__wrapper"
      :data-test="dataTest != undefined ? `content-${dataTest}` : undefined"
    >
      <slot />
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
        aria-live="polite"
      >
        <div class="puik-tooltip__tip__content">
          <span
            v-if="$slots.heading || heading"
            class="puik-tooltip__tip__content__heading"
            :data-test="dataTest != undefined ? `heading-${dataTest}` : undefined"
          >
            <slot name="heading">{{ heading }}</slot></span>
          <span
            v-if="$slots.description || description"
            class="puik-tooltip__tip__content__description"
            :data-test="
              dataTest != undefined ? `description-${dataTest}` : undefined
            "
          ><slot name="description">{{ description }}</slot></span>
        </div>

        <div
          class="puik-tooltip__tip__arrow"
          data-popper-arrow
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { createPopper } from '@popperjs/core';
import { useTimeoutFn } from '@vueuse/core';
import { generateId } from '@prestashopcorp/puik-utils';
import { PuikTooltipPositions, type TooltipProps } from './tooltip';
import type { Instance as PopperInstance } from '@popperjs/core';
defineOptions({
  name: 'PuikTooltip'
});

const tooltipWrapper = ref<HTMLElement | null>(null);
const tooltip = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let popperInstance: PopperInstance | null = null;
const id = `puik-tooltip-${generateId()}`;

const props = withDefaults(defineProps<TooltipProps>(), {
  position: PuikTooltipPositions.Bottom,
  zindex: 1000,
  disappearDelay: 500,
  dataTest: 'tooltip'
});

const { start, stop, isPending } = useTimeoutFn(() => {
  isVisible.value = false;
}, props.disappearDelay);

const updateTooltip = () => {
  if (isPending) {
    stop();
  }
  isVisible.value = true;
  popperInstance?.update();
};

onMounted(() => {
  if (tooltipWrapper.value && tooltip.value) {
    popperInstance = createPopper(tooltipWrapper.value, tooltip.value, {
      placement: props.position,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 12]
          }
        }
      ]
    });
  }
});
</script>
