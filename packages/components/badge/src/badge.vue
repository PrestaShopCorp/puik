<template>
  <div
    class="puik-badge"
    :class="[`puik-badge--${variant}`]"
    :data-test="badgeDataTest"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { badgeProps } from './badge'
defineOptions({
  name: 'PuikBadge',
})

defineProps(badgeProps)
</script>
