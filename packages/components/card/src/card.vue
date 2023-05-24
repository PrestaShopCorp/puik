<template>
  <div :class="['puik-card', `puik-card--${variant}`]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { cardProps } from './card'
defineOptions({
  name: 'PuikCard',
})
defineProps(cardProps)
</script>
