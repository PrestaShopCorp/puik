<template>
  <puik-progress-bar :percentage="percentage" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const percentage = ref(50)
</script>

