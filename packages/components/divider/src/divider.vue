<template>
  <hr
    v-if="props.orientation === PuikDividerOrientation.Horizontal"
    class="puik-divider puik-divider--horizontal"
    :data-test="dataTest"
  >
  <div
    v-if="props.orientation === PuikDividerOrientation.Vertical"
    class="puik-divider puik-divider--vertical"
    :data-test="dataTest"
  />
</template>

<script setup lang="ts">
import { type DividerProps, PuikDividerOrientation } from './divider';

defineOptions({
  name: 'PuikDivider'
});

const props = withDefaults(defineProps<DividerProps>(), {
  orientation: PuikDividerOrientation.Horizontal
});
</script>
