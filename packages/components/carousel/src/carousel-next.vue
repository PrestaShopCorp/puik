<template>
  <button
    class="puik-carousel__next"
    :disabled="disabled || !canScrollNext"
    :aria-label="ariaLabel"
    :data-test="dataTest"
    @click="scrollNext"
  >
    <puik-icon
      :icon="orientation === 'vertical' ? 'expand_more' : 'chevron_right'"
      font-size="1.5rem"
    />
    <span class="puik-sr-only">Next slide</span>
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { CAROUSEL_INJECTION_KEY } from './carousel';
import { PuikIcon } from '../../icon';

export interface CarouselNextProps {
  disabled?: boolean;
  ariaLabel?: string;
  dataTest?: string;
}

defineOptions({
  name: 'PuikCarouselNext',
});

withDefaults(defineProps<CarouselNextProps>(), {
  disabled: false,
  ariaLabel: undefined,
  dataTest: undefined,
});

const context = inject(CAROUSEL_INJECTION_KEY);
if (!context) {
  throw new Error('PuikCarouselNext must be used within a PuikCarousel');
}

const { scrollNext, canScrollNext, orientation } = context;
</script>
