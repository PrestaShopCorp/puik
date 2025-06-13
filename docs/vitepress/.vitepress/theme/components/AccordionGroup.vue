<template>
  <puik-accordion-group
    v-model="expandedAccordion"
    :multiple="multiple"
    :contained="contained"
  >
    <puik-accordion
      title="Title 1"
      name="accordion-1"
    >
      Content 1
    </puik-accordion>
    <puik-accordion
      title="Title 2"
      name="accordion-2"
    >
      Content 2
    </puik-accordion>
    <puik-accordion
      title="Title 3"
      name="accordion-3"
    >
      Content 3
    </puik-accordion>
  </puik-accordion-group>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const expandedAccordion = ref([]);
const multiple = ref(true);
const contained = ref(false);
</script>
