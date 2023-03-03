<template>
  <div class="puik-card">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue'
defineOptions({
  name: 'PuikCard',
})
const slots = useSlots()
</script>
