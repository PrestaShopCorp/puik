<template>
  <hr
    v-if="props.orientation === PuikDividerOrientation.HORIZONTAL"
    class="puik-divider puik-divider--horizontal"
    :data-test="dataTest ?? undefined"
  />
  <div
    v-if="props.orientation === PuikDividerOrientation.VERTICAL"
    class="puik-divider puik-divider--vertical"
    :data-test="dataTest ?? undefined"
  ></div>
</template>

<script setup lang="ts">
import { dividerProps, PuikDividerOrientation } from './divider'

defineOptions({
  name: 'PuikDivider',
})

const props = defineProps(dividerProps)
</script>
