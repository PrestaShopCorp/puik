<template>
  <component
    :is="componentType"
    v-bind="pathProp"
    :target="target"
    :title="title"
    class="puik-link"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { linkProps } from './link'

const props = defineProps(linkProps)

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
