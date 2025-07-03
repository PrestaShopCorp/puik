<template>
  <div class="flex items-center justify-center">
    <puik-checkbox
      v-model="modelValue"
      :label="label"
      :aria-label="ariaLabel"
      :sr-label="srLabel"
      :indeterminate="indeterminate"
      :disabled="disabled"
      :data-test="dataTest"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modelValue = ref(false);
const label = ref('Label');
const ariaLabel = ref('');
const srLabel = ref('');
const indeterminate = ref(false);
const disabled = ref(false);
const dataTest = ref('');
</script>
