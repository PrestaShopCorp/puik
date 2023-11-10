<template>
  <component :is="nodeType" class="puik-icon" :style="style">
    {{ icon }}
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type IconProps } from './icon'
defineOptions({
  name: 'PuikIcon',
})

const props = withDefaults(defineProps<IconProps>(), {
  nodeType: 'div',
  fontSize: '1rem',
  color: '#00000',
})

const fontSize = computed(() => {
  if (!Number.isNaN(Number(props.fontSize))) {
    return `${props.fontSize}px`
  }

  return props.fontSize
})

const style = {
  fontSize: fontSize.value,
  color: props.color,
}
</script>
