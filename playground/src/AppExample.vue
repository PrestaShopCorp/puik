<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { RouterView } from 'vue-router';
import { PuikLink } from '@prestashopcorp/puik-components';
</script>

<template>
  <header>
    <div>
      <h1 class="puik-brand-h1">
        Puik Playground
      </h1>
      <nav>
        <puik-link to="/">
          Vue components
        </puik-link>
        <puik-link to="/web-components">
          Web components
        </puik-link>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header,
main {
  @apply flex flex-col space-y-5 p-5;
}
nav {
  @apply flex space-x-5;
}
</style>
