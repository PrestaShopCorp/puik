<template>
  <div
    :id="id"
    :class="[
      `puik-tag puik-tag--${variant as PuikTagColorVariant} puik-tag--${size as PuikTagSizeVariant}`,
      { 'puik-tag--disabled': disabled },
    ]"
  >
    <PuikIcon v-if="icon && icon != ''" :icon="icon" class="puik-tag__icon" />
    <div class="puik-tag__content">
      <puik-tooltip
        :key="content"
        :is-disabled="!showTooltip"
        :position="(tooltipPosition as PuikTooltipPosition)"
        :description="content"
        :data-test="dataTest != undefined ? `tooltip-${dataTest}` : undefined"
      >
        <p
          ref="tagContentElem"
          :data-test="dataTest != undefined ? `content-${dataTest}` : undefined"
        >
          {{ content }}
        </p>
      </puik-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { PuikIcon } from '@puik/components/icon'
import { PuikTooltip } from '@puik/components/tooltip'
import { isEllipsisActive } from '@puik/utils'
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
const tagContentElem = ref(null)
const showTooltip = ref(false)

const emit = defineEmits(['close'])

const handleCloseEvent = () => {
  emit('close')
}

watch(tagContentElem, async () => {
  await nextTick()
  if (tagContentElem?.value) {
    showTooltip.value = isEllipsisActive(tagContentElem.value)
  }
})
</script>
