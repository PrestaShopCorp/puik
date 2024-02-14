<template>
  <div
    :id="props.id"
    :class="[
      `puik-chip puik-chip--${props.size as PuikChipSizeVariant}`,
      { 'puik-chip--disabled': props.disabled },
    ]"
  >
    <PuikIcon
      v-if="props.icon && props.icon != ''"
      :icon="props.icon"
      class="puik-chip__icon"
    />
    <div class="puik-chip__content">
      <puik-tooltip
        :key="props.content"
        :is-disabled="!showTooltip"
        :position="(tooltipPosition as PuikTooltipPosition)"
        :description="props.content"
      >
        <p ref="chipContentElem">
          {{ props.content }}
        </p>
      </puik-tooltip>
    </div>
    <PuikIcon
      icon="close"
      class="puik-chip__close"
      @click="props.disabled ? '' : handleCloseEvent()"
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
