<template>
  <div
    :id="id"
    :class="[
      `puik-tag puik-tag--${variant as PuikTagColorVariant} puik-tag--${
        size as PuikTagSizeVariant
      }`,
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
import { PuikTooltip } from '@prestashopcorp/puik-components/tooltip'
import {
  tagProps,
  type PuikTagSizeVariant,
  type PuikTagColorVariant,
} from './tag'
defineOptions({
  name: 'PuikTag',
})

defineProps(tagProps)
defineEmits(['close'])
</script>
