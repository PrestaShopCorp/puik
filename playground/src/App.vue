<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { PuikLink } from '@puik/components'
</script>

<template>
  <div class="app-container">
    <puik-link to="#"
      >The struggle itself towards the heights is enough to fill a man's
      heart.</puik-link
    >
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
