<template>
  <component
    :is="nodeType"
    class="puik-icon"
    :class="`material-icons-round`"
    :style="style"
  >
    {{ icon }}
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { iconProps } from './icon'

defineOptions({
  name: 'PuikIcon',
})

const props = defineProps(iconProps)

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
