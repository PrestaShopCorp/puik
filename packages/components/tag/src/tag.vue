<template>
  <div
    :id="id"
    :class="[
      `puik-tag puik-tag--${variant} puik-tag--${size}`,
      { 'puik-tag--disabled': disabled },
    ]"
    :data-test="dataTest"
  >
    <PuikIcon
      v-if="icon && icon != ''"
      :icon="icon"
      class="puik-tag__icon"
    />
    <div class="puik-tag__content">
      <puik-tooltip
        :key="content"
        :is-disabled="!showTooltip"
        :position="tooltipPosition"
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
import { nextTick, ref, watch } from 'vue';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import {
  PuikTooltip,
  PuikTooltipPositions
} from '@prestashopcorp/puik-components/tooltip';
import { isEllipsisActive } from '@prestashopcorp/puik-utils';
import { type TagProps, PuikTagSizes, PuikTagVariants } from './tag';
defineOptions({
  name: 'PuikTag'
});

withDefaults(defineProps<TagProps>(), {
  variant: PuikTagVariants.Neutral,
  size: PuikTagSizes.Default,
  tooltipPosition: PuikTooltipPositions.Bottom
});

defineEmits<{
  close: []
}>();

const tagContentElem = ref(null);
const showTooltip = ref(false);

watch(tagContentElem, async () => {
  await nextTick();
  if (tagContentElem?.value) {
    showTooltip.value = isEllipsisActive(tagContentElem.value);
  }
});
</script>
