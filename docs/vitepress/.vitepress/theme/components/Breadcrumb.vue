<template>
  <puik-breadcrumb
    :items="items"
    :icon="icon"
  ></puik-breadcrumb>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
  {
    label: 'First link',
    href: '#'
  },
  {
    label: 'Second link',
    href: '#'
  },
  {
    label: 'Third link',
    to: 'name',
    target: '_blank'
  }
]);
const icon = ref('home');
</script>
