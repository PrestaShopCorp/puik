<template>
  <component
    :is="componentType"
    v-bind="pathProp"
    :target="target"
    :title="title"
    :class="[
      'puik-link',
      `puik-link--${size}`,
      { 'puik-link--high-contrast': highContrast },
    ]"
    :data-test="dataTest"
  >
    <slot></slot>

    <span
      v-if="props.target === PuikLinkTarget.BLANK"
      class="puik-link__target__icon"
    >
      {{ TARGET_BLANK_ICON }}
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { linkProps, PuikLinkTarget } from './link'

defineOptions({
  name: 'PuikLink',
})

const props = defineProps(linkProps)
const TARGET_BLANK_ICON = 'open_in_new'

const componentType = computed(() => {
  if (props.to) {
    return 'router-link'
  }
  return 'a'
})

const pathProp = computed(() =>
  props.to ? { to: props.to } : { href: props.href }
)
</script>
