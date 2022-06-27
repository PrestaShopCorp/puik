<script setup>
import { computed, ref } from 'vue'

import Radio from '../../packages/components/radio/src/radio.vue'
const value = ref(false)

const updateValue = () => {
  value.value = !value.value
}
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div class="app-container">
    {{ value }}
    <Radio
      :label="'coucou'"
      :model-value="value.value"
      @update:modelValue="updateValue"
    />
    <Radio
      :label="'coucou'"
      :model-value="!value.value"
      @update:modelValue="updateValue"
    />
  </div>
</template>

<style lang="scss">
html,
body {
  @apply w-screen h-screen m-0;
  #app {
    @apply w-full h-full;
    .app-container {
      @apply w-full h-full;
    }
  }
}
</style>
