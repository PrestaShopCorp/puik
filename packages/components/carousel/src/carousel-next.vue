<template>
  <puik-button
    :variant="variant"
    :size="size"
    class="puik-carousel__next"
    :disabled="disabled || !canScrollNext"
    :disabled-reason="disabledReason"
    :wrap-label="wrapLabel"
    :fluid="fluid"
    :aria-label="ariaLabel"
    :data-test="dataTest"
    @click="scrollNext"
  >
    <puik-icon
      :icon="
        orientation === 'vertical' ? 'keyboard_arrow_down' : 'chevron_right'
      "
    />
    <span class="puik-sr-only">Next slide</span>
  </puik-button>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { CAROUSEL_INJECTION_KEY } from './carousel';
import { PuikButton } from '../../button';
import { PuikButtonVariants, PuikButtonSizes } from '../../button/src/button';
import { PuikIcon } from '../../icon';

export interface CarouselNextProps {
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
  name: 'PuikCarouselNext',
});

const props = withDefaults(defineProps<CarouselNextProps>(), {
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
  throw new Error('PuikCarouselNext must be used within a PuikCarousel');
}

const { scrollNext, canScrollNext, orientation } = context;
</script>
