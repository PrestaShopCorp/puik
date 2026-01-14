<template>
  <div class="puik-carousel__indicators">
    <button
      v-for="(_, index) in scrollSnaps"
      :key="index"
      class="puik-carousel__indicator"
      :aria-label="`Go to slide ${index + 1}`"
      @click="scrollTo(index)"
    >
      <span
        class="puik-carousel__indicator-dot"
        :class="{
          'puik-carousel__indicator-dot--active': index === selectedIndex,
          [`puik-carousel__indicator-dot--active--${
            ['blue', 'purple', 'amber', 'green'][index % 4]
          }`]: index === selectedIndex,
        }"
      />
    </button>
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
