<template>
  <div class="flex items-center justify-center">
    <puik-switch v-model="enabled" label="Switch Label" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const enabled = ref(false);
</script>
