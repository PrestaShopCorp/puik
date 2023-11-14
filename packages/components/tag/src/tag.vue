<template>
  <div
    :id="id"
    :class="[
      `puik-tag puik-tag--${variant as PuikTagColorVariant} puik-tag--${size as PuikTagSizeVariant}`,
      { 'puik-tag--disabled': disabled },
    ]"
  >
    <PuikIcon v-if="icon && icon != ''" :icon="icon" class="puik-tag__icon" />
    <div
      class="puik-tag__content"
      :data-test="dataTest != undefined ? `content-${dataTest}` : undefined"
    >
      <puik-tooltip
        v-if="content?.length >= 30"
        :position="(tooltipPosition as PuikTooltipPosition)"
        :description="content"
        :data-test="dataTest != undefined ? `tooltip-${dataTest}` : undefined"
      >
        <template #description>{{ content }}</template>
        {{ content }}
      </puik-tooltip>
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { PuikIcon } from '@puik/components/icon'
import { PuikTooltip } from '@puik/components/tooltip'
import {
  tagProps,
  type PuikTagSizeVariant,
  type PuikTagColorVariant,
} from './tag'
import type { PuikTooltipPosition } from '@puik/components/tooltip'
defineOptions({
  name: 'PuikTag',
})

const props = defineProps(tagProps)
const emit = defineEmits(['close'])

const handleCloseEvent = () => {
  emit('close')
}
</script>
