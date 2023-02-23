<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { PuikButtonGroup, PuikButton } from '@puik/components'
</script>

<template>
  <div class="app-container">
    <puik-button-group>
      <puik-button :variant="'tertiary'">Button 1</puik-button>
      <puik-button :variant="'tertiary'">Button 2</puik-button>
      <puik-button :variant="'tertiary'">Button 3</puik-button>
      <puik-button :variant="'tertiary'">Button 4</puik-button>
      <puik-button :variant="'tertiary'">Button 5</puik-button>
    </puik-button-group>
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
