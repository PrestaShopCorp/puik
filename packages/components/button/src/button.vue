<template>
  <component
    :is="componentType"
    v-bind="pathProp"
    class="puik-button"
    :class="[
      `puik-button--${variant}`,
      `puik-button--${size}`,
      { 'puik-button--disabled': disabled },
      { 'puik-button--fluid': fluid },
    ]"
    :disabled="disabled"
  >
    <puik-icon
      v-if="leftIcon"
      :icon="leftIcon"
      :font-size="size !== 'sm' ? '1.25rem' : '1rem'"
      class="puik-button__left-icon"
    />
    <slot></slot>
    <puik-icon
      v-if="rightIcon"
      :icon="rightIcon"
      :font-size="size !== 'sm' ? '1.25rem' : '1rem'"
      class="puik-button__right-icon"
    />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PuikIcon } from '@puik/components/icon'
import { buttonProps } from './button'
defineOptions({
  name: 'PuikButton',
})

const props = defineProps(buttonProps)

const componentType = computed(() => {
  if (props.to) {
    return 'router-link'
  } else if (props.href) {
    return 'a'
  }
  return 'button'
})

const pathProp = computed(() =>
  props.to ? { to: props.to } : { href: props.href }
)
</script>
