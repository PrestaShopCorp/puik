<template>
  <div
    class="puik-carousel__item"
    role="group"
    aria-roledescription="slide"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PuikCarouselItem',
});
</script>
