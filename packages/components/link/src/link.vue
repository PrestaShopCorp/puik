<template>
  <component
    :is="componentType"
    v-bind="pathProp"
    :target="target"
    :title="title"
    :class="['puik-link', `puik-link--${size}`]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PuikLinkSizes, type LinkProps, PuikLinkTargetVariants } from './link';
defineOptions({
  name: 'PuikLink'
});

const props = withDefaults(defineProps<LinkProps>(), {
  size: PuikLinkSizes.Medium,
  target: PuikLinkTargetVariants.Self
});

const componentType = computed(() => {
  if (props.to) {
    return 'router-link';
  }
  return 'a';
});

const pathProp = computed(() =>
  props.to ? { to: props.to } : { href: props.href }
);
</script>
