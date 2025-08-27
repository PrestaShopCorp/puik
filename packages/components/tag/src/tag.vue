<template>
  <div
    :id="id"
    :class="[
      `puik-tag puik-tag--${variant} puik-tag--${size}`,
      { 'puik-tag--accent': accent },
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
        v-if="showTooltip"
        :key="content"
        :position="tooltipPosition"
        :description="content"
        :data-test="
          dataTest != undefined ? `tooltip-${dataTest}` : undefined
        "
      >
        <p
          ref="tagContentElem"
          :data-test="
            dataTest != undefined
              ? `content-${dataTest}`
              : undefined
          "
        >
          {{ content }}
        </p>
      </puik-tooltip>
      <p
        v-if="showDefaultContent"
        ref="tagContentElem"
        :data-test="
          dataTest != undefined
            ? `content-${dataTest}`
            : undefined
        "
      >
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
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
  accent: false,
  tooltipPosition: PuikTooltipPositions.Bottom
});

const tagContentElem = ref<HTMLElement | null>(null);
const showTooltip = ref(false);
const showDefaultContent = ref(true);

onMounted(async () => {
  if (tagContentElem.value) {
    showTooltip.value = isEllipsisActive(tagContentElem.value);
    showDefaultContent.value = !showTooltip.value;
  }
});

</script>
