<template>
  <div
    :id="props.id"
    :class="[
      `puik-tag puik-tag--${props.variant as PuikTagColorVariant} puik-tag--${props.size as PuikTagSizeVariant}`,
      { 'puik-tag--disabled': props.disabled },
    ]"
    :data-test="props.dataTest"
  >
    <PuikIcon
      v-if="props.icon && props.icon != ''"
      :icon="props.icon"
      class="puik-tag__icon"
    />
    <div class="puik-tag__content">
      <puik-tooltip
        :key="props.content"
        :is-disabled="!showTooltip"
        :position="(props.tooltipPosition as PuikTooltipPosition)"
        :description="props.content"
        :data-test="
          props.dataTest != undefined ? `tooltip-${props.dataTest}` : undefined
        "
      >
        <p
          ref="tagContentElem"
          :data-test="
            props.dataTest != undefined
              ? `content-${props.dataTest}`
              : undefined
          "
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

watch(tagContentElem, async () => {
  await nextTick()
  if (tagContentElem?.value) {
    showTooltip.value = isEllipsisActive(tagContentElem.value)
  }
})
</script>
