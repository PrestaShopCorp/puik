<template>
  <div class="puik-carousel__indicators">
    <button
      v-for="(_, index) in scrollSnaps"
      :key="index"
      class="puik-carousel__indicator"
      :class="{
        'puik-carousel__indicator--active': index === selectedIndex,
      }"
      :aria-label="`Go to slide ${index + 1}`"
      @click="scrollTo(index)"
    />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { CAROUSEL_INJECTION_KEY } from './carousel';

defineOptions({
  name: 'PuikCarouselIndicators',
});

const context = inject(CAROUSEL_INJECTION_KEY);
if (!context) {
  throw new Error('PuikCarouselIndicators must be used within a PuikCarousel');
}

const { scrollSnaps, selectedIndex, scrollTo } = context;
</script>
