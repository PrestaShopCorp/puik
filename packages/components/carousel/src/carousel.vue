<template>
  <div
    class="puik-carousel"
    :class="{
      'puik-carousel--vertical': orientation === 'vertical',
      'puik-carousel--horizontal': orientation === 'horizontal',
    }"
    role="region"
    aria-roledescription="carousel"
    :data-test="dataTest"
    tabindex="0"
    :style="styles"
    @keydown="onKeyDown"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watchEffect, computed } from 'vue';
import emblaCarouselVue from 'embla-carousel-vue';
import {
  CarouselProps,
  CarouselEmits,
  CAROUSEL_INJECTION_KEY,
} from './carousel';
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';

defineOptions({
  name: 'PuikCarousel',
});

const props = withDefaults(defineProps<CarouselProps>(), {
  orientation: 'horizontal',
});

const emits = defineEmits<CarouselEmits>();

const options = ref<EmblaOptionsType>({
  ...props.opts,
  axis: props.orientation === 'horizontal' ? 'x' : 'y',
});

watchEffect(() => {
  options.value = {
    ...props.opts,
    axis: props.orientation === 'horizontal' ? 'x' : 'y',
  };
});

const styles = computed(() => ({
  '--puik-carousel-vertical-height':
    typeof props.verticalHeight === 'number'
      ? `${props.verticalHeight}px`
      : props.verticalHeight,
  '--puik-carousel-item-width': props.itemWidth
    ? `${props.itemWidth}%`
    : undefined,
}));

const [carouselRef, api] = emblaCarouselVue(options, props.plugins);

const canScrollPrev = ref(false);
const canScrollNext = ref(false);
const selectedIndex = ref(0);
const scrollSnaps = ref<number[]>([]);

const onSelect = (api: EmblaCarouselType) => {
  canScrollPrev.value = api.canScrollPrev();
  canScrollNext.value = api.canScrollNext();
  selectedIndex.value = api.selectedScrollSnap();
  scrollSnaps.value = api.scrollSnapList();
};

const scrollPrev = () => {
  api.value?.scrollPrev();
};

const scrollNext = () => {
  api.value?.scrollNext();
};

const scrollTo = (index: number) => {
  api.value?.scrollTo(index);
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

  api.value.on('init', (api) => emits('init', api));
  api.value.on('destroy', (api) => emits('destroy', api));
  api.value.on('scroll', (api) => emits('scroll', api));
  api.value.on('settle', (api) => emits('settle', api));
  api.value.on('resize', (api) => emits('resize', api));
  api.value.on('slidesChanged', (api) => emits('slidesChanged', api));
  api.value.on('pointerDown', (api) => emits('pointerDown', api));
  api.value.on('pointerUp', (api) => emits('pointerUp', api));

  api.value.on('select', (api) => {
    onSelect(api);
    emits('select', api);
  });
  api.value.on('reInit', (api) => {
    onSelect(api);
    emits('reInit', api);
  });

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
  selectedIndex,
  scrollSnaps,
  scrollTo,
});

defineExpose({
  api,
  scrollPrev,
  scrollNext,
  scrollTo,
  canScrollPrev,
  canScrollNext,
  selectedIndex,
  scrollSnaps,
  selectedScrollSnap: () => api.value?.selectedScrollSnap(),
  previousScrollSnap: () => api.value?.previousScrollSnap(),
  scrollSnapList: () => api.value?.scrollSnapList(),
  internalEngine: () => api.value?.internalEngine(),
  rootNode: () => api.value?.rootNode(),
  containerNode: () => api.value?.containerNode(),
  slideNodes: () => api.value?.slideNodes(),
  on: (event: any, callback: any) => api.value?.on(event, callback),
  off: (event: any, callback: any) => api.value?.off(event, callback),
  emit: (event: any) => api.value?.emit(event),
  plugins: () => api.value?.plugins(),
  reInit: (options?: EmblaOptionsType, plugins?: any[]) =>
    api.value?.reInit(options, plugins),
  destroy: () => api.value?.destroy(),
});
</script>
