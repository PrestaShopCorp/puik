<template>
  <component
    :is="nodeType"
    class="puik-icon"
    :style="style"
    :data-test="dataTest"
  >
    {{ icon }}
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@puik/tailwind-preset/theme'
import { iconProps } from './icon'

defineOptions({
  name: 'PuikIcon',
})

const fullConf = resolveConfig(tailwindConfig)
const props = defineProps(iconProps)

const fontSize = computed(() => {
  if (!Number.isNaN(Number(props.fontSize))) {
    return `${props.fontSize}px`
  }
  return props.fontSize
})

const style = computed(() => {
  return {
    fontSize: fontSize.value,
    color: props.isDisabled
      ? fullConf.extend?.colors?.primary['500']
      : props.color,
  }
})
</script>
