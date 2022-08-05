<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { ref } from 'vue'
import PuikButton from '../../packages/components/button/index'
import PuikModal from '../../packages/components/modal/index'
const dialogVisible = ref(false)
</script>

<template>
  <div class="app-container">
    <puik-button @click="dialogVisible = true">Open Modal</puik-button>
    <puik-modal
      v-model="dialogVisible"
      :show-close="true"
      title="Une modal personnalisé"
      center
    >
      <template #footer>
        <puik-button @click="dialogVisible = false">Close Modal</puik-button>
      </template>
    </puik-modal>
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
