<template>
  <div id="puik-spinner">
    <div :class="[`lds-ring--${variant}`, `zoom--${size}`, 'lds-ring', 'zoom']">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { spinnerProps } from './spinner'
defineOptions({
  name: 'PuikSpinner',
})

const props = defineProps(spinnerProps)
</script>
