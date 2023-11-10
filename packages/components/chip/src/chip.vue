<template>
  <div
    :id="id"
    :class="[
      `puik-chip puik-chip--${size}`,
      { 'puik-chip--disabled': disabled },
    ]"
  >
    <PuikIcon v-if="icon && icon != ''" :icon="icon" class="puik-chip__icon" />
    <div class="puik-chip__content">
      <PuikTooltip
        v-if="content?.length >= 30"
        :position="tooltipPosition"
        :description="content"
      >
        <template #description>{{ content }}</template>
        {{ content }}
      </PuikTooltip>
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
import { PuikIcon } from '@prestashopcorp/puik-components/icon'
import {
  PuikTooltip,
  PuikTooltipPositions,
} from '@prestashopcorp/puik-components/tooltip'
import { PuikChipSizeVariants, type ChipProps } from './chip'
defineOptions({
  name: 'PuikChip',
})

withDefaults(defineProps<ChipProps>(), {
  size: PuikChipSizeVariants.Default,
  tooltipPosition: PuikTooltipPositions.Bottom,
})
const emit = defineEmits(['close'])

const handleCloseEvent = () => {
  emit('close')
}
</script>
