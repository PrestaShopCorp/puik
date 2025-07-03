<template>
  <div class="flex flex-col items-center gap-6">
    <puik-spinner-loader
      size="lg"
      color="primary"
      label="Loading large"
      position="bottom"
      data-test="spinner-loader-lg"
    />
    <puik-spinner-loader
      size="md"
      color="reverse"
      label="Loading medium"
      position="right"
      data-test="spinner-loader-md"
    />
    <puik-spinner-loader
      size="sm"
      color="primary"
      :label="label"
      :position="position"
      :data-test="dataTest"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const label = ref('Loading small')
const position = ref('bottom')
const dataTest = ref('spinner-loader-sm')
</script>
