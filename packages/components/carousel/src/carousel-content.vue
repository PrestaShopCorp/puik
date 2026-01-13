<template>
  <div ref="carouselRef" class="puik-carousel__viewport">
    <div
      class="puik-carousel__container"
      :class="{
        'puik-carousel__container--vertical': orientation === 'vertical',
        'puik-carousel__container--horizontal': orientation === 'horizontal',
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { CAROUSEL_INJECTION_KEY } from './carousel';

defineOptions({
  name: 'PuikCarouselContent',
});

const context = inject(CAROUSEL_INJECTION_KEY);
if (!context) {
  throw new Error('PuikCarouselContent must be used within a PuikCarousel');
}

const { carouselRef, orientation } = context;
</script>
