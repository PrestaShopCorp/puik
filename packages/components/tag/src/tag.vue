<template>
  <div
    :id="id"
    :class="[
      `puik-tag puik-tag--${variant} puik-tag--${size}`,
      { 'puik-tag--disabled': disabled },
    ]"
  >
    <PuikIcon v-if="icon && icon != ''" :icon="icon" class="puik-tag__icon" />
    <div class="puik-tag__content">
      <puik-tooltip
        v-if="content?.length >= 30"
        :position="tooltipPosition"
        :description="content"
      >
        <template #description>{{ content }}</template>
        {{ content }}
      </puik-tooltip>
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { PuikIcon } from '@prestashopcorp/puik-components/icon'
import {
  PuikTooltip,
  PuikTooltipPositions,
} from '@prestashopcorp/puik-components/tooltip'
import { type TagProps, PuikTagSizes, PuikTagVariants } from './tag'
defineOptions({
  name: 'PuikTag',
})

withDefaults(defineProps<TagProps>(), {
  variant: PuikTagVariants.Neutral,
  size: PuikTagSizes.Default,
  tooltipPosition: PuikTooltipPositions.Bottom,
})
defineEmits<{
  close: []
}>()
</script>
