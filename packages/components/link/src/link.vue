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
import { computed, getCurrentInstance } from 'vue'
import { linkProps } from './link'
defineOptions({
  name: 'PuikLink',
})

const props = defineProps(linkProps)

const instance = getCurrentInstance()

const isNuxtInstance = computed(() => {
  return !!instance?.appContext.app.$nuxt
})

const componentType = computed(() => {
  if (props.to) {
    return isNuxtInstance.value ? 'nuxt-link' : 'router-link'
  }
  return 'a'
})
</script>
