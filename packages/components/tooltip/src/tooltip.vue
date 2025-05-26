<template>
  <div
    class="puik-tooltip"
    :data-test="dataTest"
  >
    <div
      ref="slotWrapper"
      class="puik-tooltip__slot--wrapper "
      tabindex="0"
      :aria-describedby="id"
      :aria-expanded="isVisible"
      :data-test="dataTest ? `slot-content-${dataTest}` : undefined"
      @mouseover="updateTooltip"
      @mouseleave="startHideTooltip"
      @focus="updateTooltip"
      @blur="startHideTooltip"
      @keydown.esc="startHideTooltip"
      @click="updateTooltip"
    >
      <slot />
    </div>
    <div
      v-show="!isDisabled && isVisible"
      :id="id"
      ref="tooltip"
      role="tooltip"
      :class="[
        'puik-tooltip__tip',
      { 'puik-tooltip--visible': isVisible }
      ]"
      :style="{ 'z-index': isVisible ? zindex : -1, 'max-width': maxWidth }"
      aria-live="polite"
      :aria-hidden="!isVisible"
      @mouseover="stayVisible"
      @mouseleave="startHideTooltip"
      :data-test="dataTest ? `tip-content-${dataTest}` : undefined"
    >
      <div class="puik-tooltip__tip__content">
        <span
          v-if="$slots.heading || heading"
          class="puik-tooltip__tip__content__heading"
          :data-test="dataTest ? `heading-${dataTest}` : undefined"
        >
          <slot name="heading">{{ heading }}</slot>
        </span>
        <span
          v-if="$slots.description || description"
          class="puik-tooltip__tip__content__description"
          :data-test="dataTest ? `description-${dataTest}` : undefined"
        >
          <slot name="description">{{ description }}</slot>
        </span>
      </div>
      <div class="puik-tooltip__tip__arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { createPopper } from '@popperjs/core';
import { generateId } from '@prestashopcorp/puik-utils';
import { PuikTooltipPositions, type TooltipProps } from './tooltip';
import type { Instance as PopperInstance } from '@popperjs/core';

defineOptions({
  name: 'PuikTooltip'
});

const slotWrapper = ref<HTMLElement | null>(null);
const tooltip = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let popperInstance: PopperInstance | null = null;
const id = `puik-tooltip-${generateId()}`;

const props = withDefaults(defineProps<TooltipProps>(), {
  position: PuikTooltipPositions.Bottom,
  zindex: 1000,
  disappearDelay: 50,
  dataTest: 'tooltip'
});

const updateTooltip = () => {
  isVisible.value = true;
  popperInstance?.update();
};

const hideTooltip = () => {
  isVisible.value = false;
};

const stayVisible = () => {
  isVisible.value = true;
};

const startHideTooltip = () => {
  setTimeout(() => {
    if (!slotWrapper.value?.matches(':hover') && !tooltip.value?.matches(':hover')) {
      hideTooltip();
    }
  }, props.disappearDelay);
};

onMounted(() => {
  if (slotWrapper.value && tooltip.value) {
    popperInstance = createPopper(slotWrapper.value, tooltip.value, {
      placement: props.position,
      modifiers: [{ name: 'offset', options: { offset: [0, 12] } }]
    });
  }
});

onUnmounted(() => {
  popperInstance?.destroy();
  popperInstance = null;
});
</script>
