<template>
  <div class="flex items-center justify-center">
    <puik-button
      :size="size"
      :variant="variant"
      :fluid="fluid"
      :wrap-label="wrapLabel"
      :disabled="disabled"
      :left-icon="leftIcon"
      :right-icon="rightIcon"
      >
      Button label
    </puik-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const size = ref('md');
const variant = ref('primary');
const fluid = ref(false);
const wrapLabel = ref(true);
const disabled = ref(false);
const leftIcon = ref('');
const rightIcon = ref('');
</script>
