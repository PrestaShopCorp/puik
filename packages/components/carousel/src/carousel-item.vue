<template>
  <div
    class="puik-carousel__item"
    role="group"
    aria-roledescription="slide"
    :data-test="dataTest"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
export interface CarouselItemProps {
  dataTest?: string;
}

defineOptions({
  name: 'PuikCarouselItem',
});

withDefaults(defineProps<CarouselItemProps>(), {
  dataTest: undefined,
});
</script>
