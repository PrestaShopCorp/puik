<template>
  <div
    class="puik-badge"
    :class="[`puik-badge--${variant}`]"
    :data-test="dataTest"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { PuikBadgeVariants } from './badge';
import type { BadgeProps } from './badge';
defineOptions({
  name: 'PuikBadge'
});

withDefaults(defineProps<BadgeProps>(), {
  variant: PuikBadgeVariants.Neutral
});
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-badge.scss';
</style>
