<template>
  <div
    :id="id"
    :class="[
      `puik-chip puik-chip--${size as PuikChipSizeVariant}`,
      { 'puik-chip--disabled': disabled },
    ]"
  >
    <PuikIcon v-if="icon && icon != ''" :icon="icon" class="puik-chip__icon" />
    <div class="puik-chip__content">
      <puik-tooltip
        v-if="content?.length >= 30"
        :position="(tooltipPosition as PuikTooltipPosition)"
        :description="content"
      >
        <template #description>{{ content }}</template>
        {{ content }}
      </puik-tooltip>
      {{ content }}
    </div>
    <PuikIcon
      icon="close"
      class="puik-chip__close"
      @click="disabled ? '' : handleCloseEvent()"
    />
  </div>
</template>

<script setup lang="ts">
import { PuikIcon } from '@puik/components/icon'
import { PuikTooltip } from '@puik/components/tooltip'
import { chipProps, type PuikChipSizeVariant } from './chip'
import type { PuikTooltipPosition } from '@puik/components/tooltip'
defineOptions({
  name: 'PuikChip',
})

const props = defineProps(chipProps)
const emit = defineEmits(['close'])

const handleCloseEvent = () => {
  emit('close')
}
</script>
