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
    <span v-if="leftIcon" class="puik-button__left-icon">{{ leftIcon }}</span>
    <slot></slot>
    <span v-if="rightIcon" class="puik-button__right-icon">{{
      rightIcon
    }}</span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
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
