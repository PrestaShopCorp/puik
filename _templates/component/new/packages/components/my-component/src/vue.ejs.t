---
to: packages/components/<%= h.changeCase.param(name) %>/src/<%= h.changeCase.param(name) %>.vue
---
<template>
  <div></div>
</template>

<script setup lang="ts">
import { <%= h.changeCase.camel(name) %>Props } from './<%= h.changeCase.param(name) %>'

const props = defineProps(<%= h.changeCase.camel(name) %>Props)
</script>
