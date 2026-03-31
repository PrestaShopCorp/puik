<template>
  <button
    class="puik-carousel__previous"
    :disabled="disabled || !canScrollPrev"
    :aria-label="ariaLabel"
    :data-test="dataTest"
    @click="scrollPrev"
  >
    <puik-icon
      :icon="orientation === 'vertical' ? 'expand_less' : 'chevron_left'"
      font-size="1.5rem"
    />
    <span class="puik-sr-only">Previous slide</span>
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { CAROUSEL_INJECTION_KEY } from './carousel';
import { PuikIcon } from '../../icon';

export interface CarouselPreviousProps {
  disabled?: boolean;
  ariaLabel?: string;
  dataTest?: string;
}

defineOptions({
  name: 'PuikCarouselPrevious',
});

withDefaults(defineProps<CarouselPreviousProps>(), {
  disabled: false,
  ariaLabel: undefined,
  dataTest: undefined,
});

const context = inject(CAROUSEL_INJECTION_KEY);
if (!context) {
  throw new Error('PuikCarouselPrevious must be used within a PuikCarousel');
}

const { scrollPrev, canScrollPrev, orientation } = context;
</script>
