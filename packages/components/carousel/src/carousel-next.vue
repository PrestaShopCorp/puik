<template>
  <puik-button
    variant="secondary"
    size="sm"
    class="puik-carousel__next"
    :disabled="!canScrollNext"
    @click="scrollNext"
  >
    <puik-icon
      :icon="
        orientation === 'vertical' ? 'keyboard_arrow_down' : 'chevron_right'
      "
    />
    <span class="sr-only">Next slide</span>
  </puik-button>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { CAROUSEL_INJECTION_KEY } from './carousel';
import { PuikButton } from '../../button';
import { PuikIcon } from '../../icon';

defineOptions({
  name: 'PuikCarouselNext',
});

const context = inject(CAROUSEL_INJECTION_KEY);
if (!context) {
  throw new Error('PuikCarouselNext must be used within a PuikCarousel');
}

const { scrollNext, canScrollNext, orientation } = context;
</script>
