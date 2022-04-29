<template>
  <div class="puik-tooltip" :class="`puik-tooltip--${position}`">
    <span class="puik-tooltip__icon">help_outline</span>
    <div class="puik-tooltip__tip">
      <span v-if="$slots.title || title" class="puik-tooltip__tip__title"
        ><slot name="title">{{ title }}</slot></span
      >
      <span
        v-if="$slots.description || description"
        class="puik-tooltip__tip__description"
        ><slot name="description">{{ description }}</slot></span
      >
      <div class="puik-tooltip__tip__arrow"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { tooltipProps } from './tooltip'
defineOptions({
  name: 'Tooltip',
})

const props = defineProps(tooltipProps)
</script>
