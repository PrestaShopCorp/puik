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
      :loader="loader"
      :loader-position="loaderPosition"
      :to="to"
      :href="href"
      :data-test="dataTest"
      :aria-label="ariaLabel"
      :disabled-reason="disabledReason"
    >
      {{ label }}
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
const loader = ref(false);
const loaderPosition = ref('right');
const to = ref('');
const href = ref('');
const dataTest = ref('');
const ariaLabel = ref('');
const disabledReason = ref('');
const label = ref('Button label');
</script>
