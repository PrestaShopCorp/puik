<template>
  <div class="puik-icon" :class="`material-icons-round`" :style="style">
    {{ icon }}
  </div>
</template>

<script setup lang="ts">
import { iconProps } from './icon'
defineOptions({
  name: 'PuikIcon',
})

const props = defineProps(iconProps)

const style = `
  font-size: ${
    !Number.isNaN(Number(props.fontSize))
      ? `${props.fontSize}px`
      : props.fontSize
  };
  color: ${props.color};`
</script>
