<template>
  <hr class="puik-divider" />
</template>

<script setup lang="ts">
import { dividerProps } from './divider'
defineOptions({
  name: 'PuikDivider',
})

const props = defineProps(dividerProps)
</script>
