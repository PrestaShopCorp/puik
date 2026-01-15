<template>
  <puik-button
    variant="secondary"
    size="sm"
    class="puik-carousel__previous"
    :disabled="!canScrollPrev"
    :data-test="dataTest"
    @click="scrollPrev"
  >
    <puik-icon
      :icon="orientation === 'vertical' ? 'keyboard_arrow_up' : 'chevron_left'"
    />
    <span class="puik-sr-only">Previous slide</span>
  </puik-button>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { CAROUSEL_INJECTION_KEY } from './carousel';
import { PuikButton } from '../../button';
import { PuikIcon } from '../../icon';

export interface CarouselPreviousProps {
  dataTest?: string;
}

defineOptions({
  name: 'PuikCarouselPrevious',
});

defineProps<CarouselPreviousProps>();

const context = inject(CAROUSEL_INJECTION_KEY);
if (!context) {
  throw new Error('PuikCarouselPrevious must be used within a PuikCarousel');
}

const { scrollPrev, canScrollPrev, orientation } = context;
</script>
