<template>
  <div
    v-bind="ariaLabel ? { 'aria-label': ariaLabel } : {}"
    :class="['puik-card', `puik-card--${variant}`]"
    role="region"
    tabindex="0"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { PuikCardVariants, type CardProps } from './card';
defineOptions({
  name: 'PuikCard'
});
withDefaults(defineProps<CardProps>(), {
  variant: PuikCardVariants.Default
});
</script>

<style lang="css">
@import '../style/index.css';
</style>
