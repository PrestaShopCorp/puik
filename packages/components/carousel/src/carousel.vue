<template>
  <div
    class="puik-carousel"
    :class="{
      'puik-carousel--vertical': orientation === 'vertical',
      'puik-carousel--horizontal': orientation === 'horizontal',
    }"
    role="region"
    aria-roledescription="carousel"
    tabindex="0"
    @keydown="onKeyDown"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watchEffect } from 'vue';
import emblaCarouselVue from 'embla-carousel-vue';
import { CarouselProps, CAROUSEL_INJECTION_KEY } from './carousel';
import type { EmblaCarouselType } from 'embla-carousel';

defineOptions({
  name: 'PuikCarousel',
});

const props = withDefaults(defineProps<CarouselProps>(), {
  orientation: 'horizontal',
});

const [carouselRef, api] = emblaCarouselVue(
  {
    ...props.opts,
    axis: props.orientation === 'horizontal' ? 'x' : 'y',
  },
  props.plugins
);

const canScrollPrev = ref(false);
const canScrollNext = ref(false);

const onSelect = (api: EmblaCarouselType) => {
  canScrollPrev.value = api.canScrollPrev();
  canScrollNext.value = api.canScrollNext();
};

const scrollPrev = () => {
  api.value?.scrollPrev();
};

const scrollNext = () => {
  api.value?.scrollNext();
};

const onKeyDown = (event: KeyboardEvent) => {
  if (props.orientation === 'vertical') {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      scrollNext();
    }
  } else {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollNext();
    }
  }
};

watchEffect(() => {
  if (!api.value) return;

  api.value.on('select', onSelect);
  api.value.on('reInit', onSelect);
  onSelect(api.value);
});

provide(CAROUSEL_INJECTION_KEY, {
  carouselRef,
  api,
  scrollPrev,
  scrollNext,
  canScrollPrev,
  canScrollNext,
  orientation: props.orientation,
});
</script>