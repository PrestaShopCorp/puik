<template>
  <AvatarRoot :class="`puik-avatar puik-avatar--${size}`">
    <AvatarImage
      v-if="src"
      :src="src"
      :alt="alt"
      :data-test="dataTest != undefined ? `avatar-image-${dataTest}` : undefined"
    />
    <AvatarFallback
      :class="`puik-avatar__fallback puik-avatar__fallback--${size} puik-avatar__fallback--${variant}`"
      :data-test="dataTest != undefined ? `avatar-fallback-${dataTest}` : undefined"
    >
      <slot name="fallback">
        PS
      </slot>
    </AvatarFallback>
  </AvatarRoot>
</template>

<script setup lang="ts">
import {
  AvatarProps,
  PuikAvatarVariants,
  PuikAvatarSizes
} from './avatar';
import { AvatarFallback, AvatarImage, AvatarRoot } from 'radix-vue';

defineOptions({
  name: 'PuikAvatar'
});

withDefaults(defineProps<AvatarProps>(), {
  variant: PuikAvatarVariants.Primary,
  size: PuikAvatarSizes.Medium
});
</script>
