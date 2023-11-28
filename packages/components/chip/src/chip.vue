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
        :key="content"
        :is-disabled="!showTooltip"
        :position="(tooltipPosition as PuikTooltipPosition)"
        :description="content"
      >
        <p ref="chipContentElem">
          {{ content }}
        </p>
      </puik-tooltip>
    </div>
    <PuikIcon
      icon="close"
      class="puik-chip__close"
      @click="disabled ? '' : handleCloseEvent()"
    />
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { PuikIcon } from '@puik/components/icon'
import { PuikTooltip } from '@puik/components/tooltip'
import { isEllipsisActive } from '@puik/utils'
import { chipProps, type PuikChipSizeVariant } from './chip'
import type { PuikTooltipPosition } from '@puik/components/tooltip'
defineOptions({
  name: 'PuikChip',
})

const props = defineProps(chipProps)
const chipContentElem = ref(null)
const showTooltip = ref(false)

const emit = defineEmits(['close'])

const handleCloseEvent = () => {
  emit('close')
}

watch(chipContentElem, async () => {
  await nextTick()
  if (chipContentElem?.value) {
    showTooltip.value = isEllipsisActive(chipContentElem.value)
  }
})
</script>
