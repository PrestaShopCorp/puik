<template>
  <component
    :is="componentType"
    v-bind="pathProp"
    :target="target"
    :title="title"
    :class="['puik-link', `puik-link--${size}`]"
    :data-test="dataTest"
  >
    <slot />

    <span
      v-if="props.target === PuikLinkTargetVariants.Blank"
      class="puik-link__target__icon"
    >
      {{ TARGET_BLANK_ICON }}
    </span>
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

const TARGET_BLANK_ICON = 'open_in_new';

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
