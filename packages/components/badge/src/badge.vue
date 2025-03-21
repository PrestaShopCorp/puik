<template>
  <div
    v-bind="ariaLabel ? { 'aria-label': ariaLabel } : {}"
    class="puik-badge"
    :class="[`puik-badge--${variant}`]"
    :data-test="dataTest"
    role="status"
    :aria-live="ariaLive"
    tabindex="0"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { PuikAriaLive } from '@prestashopcorp/puik-components/base/src/common';
import { PuikBadgeVariants } from './badge';
import type { BadgeProps } from './badge';
defineOptions({
  name: 'PuikBadge'
});

withDefaults(defineProps<BadgeProps>(), {
  variant: PuikBadgeVariants.Neutral,
  ariaLive: PuikAriaLive.Polite
});
</script>

<style lang="css">
@import '../style/index.css';
</style>
