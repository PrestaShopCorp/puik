---
to: packages/components/<%= h.changeCase.param(name) %>/src/<%= h.changeCase.param(name) %>.vue
---
<template>
  <div></div>
</template>

<script setup lang="ts">
import { <%= h.changeCase.pascal(name) %>Props } from './<%= h.changeCase.param(name) %>';
defineOptions({
  name: 'Puik<%= h.changeCase.pascal(name) %>'
});

defineProps<<%= h.changeCase.pascal(name) %>Props>();
</script>
