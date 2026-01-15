<template>
  <puik-button
    :variant="variant"
    :size="size"
    class="puik-carousel__previous"
    :disabled="disabled || !canScrollPrev"
    :disabled-reason="disabledReason"
    :wrap-label="wrapLabel"
    :fluid="fluid"
    :aria-label="ariaLabel"
    :data-test="dataTest"
    @click="scrollPrev"
  >
    <puik-icon
      :icon="orientation === 'vertical' ? 'keyboard_arrow_up' : 'chevron_left'"
    />
    <span class="puik-sr-only">Previous slide</span>
  </puik-button>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { CAROUSEL_INJECTION_KEY } from './carousel';
import { PuikButton } from '../../button';
import { PuikButtonVariants, PuikButtonSizes } from '../../button/src/button';
import { PuikIcon } from '../../icon';

export interface CarouselPreviousProps {
  variant?: `${PuikButtonVariants}`;
  size?: `${PuikButtonSizes}`;
  disabled?: boolean;
  disabledReason?: string;
  wrapLabel?: boolean;
  fluid?: boolean;
  ariaLabel?: string;
  dataTest?: string;
}

defineOptions({
  name: 'PuikCarouselPrevious',
});

const props = withDefaults(defineProps<CarouselPreviousProps>(), {
  variant: PuikButtonVariants.Secondary,
  size: PuikButtonSizes.Small,
  disabled: false,
  disabledReason: undefined,
  wrapLabel: false,
  fluid: false,
  ariaLabel: undefined,
  dataTest: undefined,
});

const context = inject(CAROUSEL_INJECTION_KEY);
if (!context) {
  throw new Error('PuikCarouselPrevious must be used within a PuikCarousel');
}

const { scrollPrev, canScrollPrev, orientation } = context;
</script>
