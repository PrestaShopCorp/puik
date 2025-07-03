<template>
  <div class="flex items-center justify-center">
    <puik-chip
      :id="id"
      :content="content"
      :size="size"
      :icon="icon"
      :disabled="disabled"
      :tooltipPosition="tooltipPosition"
      @close="handleCloseChip()"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const id = ref('puik-chip-id');
const content = ref('chip content');
const size = ref('default');
const icon = ref('home');
const disabled = ref(false);
const tooltipPosition = ref('bottom');

const handleCloseChip = () => {
  console.log('Chip closed');
};
</script>
