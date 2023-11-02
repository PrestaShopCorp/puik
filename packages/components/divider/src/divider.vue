<template>
  <hr
    v-if="props.orientation === PuikDividerOrientation.HORIZONTAL"
    class="puik-divider puik-divider--horizontal"
    :data-test="dataTest != undefined ? `horizontal-${dataTest}` : ''"
  />
  <div
    v-if="props.orientation === PuikDividerOrientation.VERTICAL"
    class="puik-divider puik-divider--vertical"
    :data-test="dataTest != undefined ? `vertical-${dataTest}` : ''"
  ></div>
</template>

<script setup lang="ts">
import { dividerProps, PuikDividerOrientation } from './divider'

defineOptions({
  name: 'PuikDivider',
})

const props = defineProps(dividerProps)
</script>
