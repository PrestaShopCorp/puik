<template>
  <div class="puik-badge" :class="[`puik-badge--${variant}`]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { badgeProps } from './badge'
defineOptions({
  name: 'PuikBadge',
})

const props = defineProps(badgeProps)
</script>
