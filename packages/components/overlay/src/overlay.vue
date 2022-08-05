<template>
  <div class="puik-overlay" :style="{ backgroundColor }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { overlayProps } from './overlay'
defineOptions({
  name: 'PuikOverlay',
})

const props = defineProps(overlayProps)
</script>
