<template>
  <puik-badge
    :variant="variant"
    :aria-live="ariaLive"
    :aria-label="ariaLabel"
    :data-test="dataTest"
  >
    badge content
  </puik-badge>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PuikBadgeVariants, PuikAriaLive } from '@prestashopcorp/puik-components';

const variant = ref(PuikBadgeVariants.Neutral);
const ariaLive = ref(PuikAriaLive.Polite);
const ariaLabel = ref('aria label');
const dataTest = ref('badge');
</script>
