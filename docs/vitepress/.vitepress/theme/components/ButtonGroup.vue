<template>
  <div class="flex items-center justify-center">
    <puik-button-group v-model="selectedValue">
      <puik-button :variant="(selectedValue === 'btn1') ? 'primary' : 'secondary'" value="btn1">Button 1</puik-button>
      <puik-button :variant="(selectedValue === 'btn2') ? 'primary' : 'secondary'" value="btn2">Button 2</puik-button>
      <puik-button :variant="(selectedValue === 'btn3') ? 'primary' : 'secondary'" value="btn3">Button 3</puik-button>
    </puik-button-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedValue = ref('btn1');
</script>
