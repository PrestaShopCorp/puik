<template>
  <puik-card
    :variant="variant"
  >
    <h3 class="puik-h3">Card title</h3>
    <p>Card content</p>
  </puik-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const variant = ref('primary');
</script>
