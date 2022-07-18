<template>
  <component :is="componentType" v-bind="componentProps" class="puik-link">
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

const componentProps = computed(() => {
  const componentProps = {}
  Object.keys(props).forEach((key) => {
    if (key === 'href' && props.to) {
      return
    }
    componentProps[key] = props[key]
  })
  return componentProps
})
</script>
