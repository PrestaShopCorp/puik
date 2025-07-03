<template>
  <div class="flex items-center justify-center">
    <puik-input v-model="myValue" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const myValue = ref('');
</script>
