<template>
  <component
    :is="componentType"
    :href="href"
    :to="to"
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
defineOptions({
  name: 'PuikLink',
})

const props = defineProps(linkProps)

const componentType = computed(() => {
  if (props.to) {
    return 'router-link'
  }
  return 'a'
})
</script>
