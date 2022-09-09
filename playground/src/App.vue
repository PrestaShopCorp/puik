<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import DragDrop from '@puik/components/drag-drop/src/drag-drop.vue'
</script>

<template>
  <div class="app-container">
    <DragDrop :id="18" style="margin: auto; margin-top: 40px"></DragDrop>
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
