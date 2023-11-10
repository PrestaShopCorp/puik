<template>
  <div :class="['puik-card', `puik-card--${variant}`]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { PuikCardVariants, type CardProps } from './card'
defineOptions({
  name: 'PuikCard',
})
withDefaults(defineProps<CardProps>(), {
  variant: PuikCardVariants.Default,
})
</script>
