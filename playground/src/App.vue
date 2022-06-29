<script setup>
import { ref } from 'vue'
import Radio from '../../packages/components/radio/src/radio.vue'

const picked = ref('hello')

const radios = [{ value: 'hello' }, { value: 'coucou' }, { value: 'hola' }]
const updateCheckbox = (event) => {
  picked.value = event
}
</script>

<template>
  <div class="app-container">
    {{ picked }}
    <Radio
      v-for="(oneRadio, index) in radios"
      :key="index"
      :label="oneRadio.value"
      :value="oneRadio.value"
      :model-value="picked"
      @update:modelValue="updateCheckbox"
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
