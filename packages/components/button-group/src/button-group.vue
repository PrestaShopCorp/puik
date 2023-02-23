<template>
  <div class="puik-button-group">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { buttonGroupProps } from './button-group'
defineOptions({
  name: 'PuikButtonGroup',
})

const props = defineProps(buttonGroupProps)
</script>
