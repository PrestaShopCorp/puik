<template>
  <div class="puik-spinner-loader__container flex flex-col">
    <span
      class="puik-spinner-loader--spinner"
      :class="[`puik-spinner-loader--${size}`]"
    >
    </span>
    <span v-if="text" :class="[`puik-spinner-loader--${size}-text`]">{{
      text
    }}</span>
  </div>
</template>

<script setup lang="ts">
import { spinnerLoaderProps } from './spinner-loader'
defineOptions({
  name: 'PuikSpinnerLoader',
})

defineProps(spinnerLoaderProps)
</script>
