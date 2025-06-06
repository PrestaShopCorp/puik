<template>
  <div
    :id="id"
    :class="[
      `puik-chip puik-chip--${size}`,
      { 'puik-chip--disabled': disabled },
    ]"
  >
    <PuikIcon
      v-if="icon && icon != ''"
      :icon="icon"
      class="puik-chip__icon"
    />
    <div class="puik-chip__content">
      <puik-tooltip
        :key="content"
        :is-disabled="!showTooltip"
        :position="tooltipPosition"
        :description="content"
      >
        <div ref="chipContentElem" class="puik-chip__content__text--container">
          <p>{{ content }}</p>
        </div>
      </puik-tooltip>
    </div>
    <PuikIcon
      icon="close"
      class="puik-chip__close"
      tabindex="0"
      role="button"
      :aria-disabled="disabled ? 'true' : 'false'"
      @click="disabled ? '' : handleCloseEvent()"
      @keydown.enter.prevent="disabled ? '' : handleCloseEvent()"
      @keydown.space.prevent="disabled ? '' : handleCloseEvent()"
    />
  </div>
</template>

<script setup lang="ts">
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import {
  PuikTooltip,
  PuikTooltipPositions
} from '@prestashopcorp/puik-components/tooltip';
import { PuikChipSizeVariants, type ChipProps } from './chip';
import { nextTick, ref, watch } from 'vue';
import { isEllipsisActive } from '@prestashopcorp/puik-utils';
defineOptions({
  name: 'PuikChip'
});

withDefaults(defineProps<ChipProps>(), {
  size: PuikChipSizeVariants.Default,
  tooltipPosition: PuikTooltipPositions.Bottom,
  disabled: false
});
const emit = defineEmits(['close']);

const chipContentElem = ref(null);
const showTooltip = ref(false);

const handleCloseEvent = () => {
  emit('close');
};

watch(chipContentElem, async () => {
  await nextTick();
  if (chipContentElem?.value) {
    showTooltip.value = isEllipsisActive(chipContentElem.value);
  }
});
</script>
