<template>
  <a class="puik-link" :href="href" :target="target" :title="title">
    <slot></slot>
    <span v-if="icon" class="puik-link--icon"></span>
  </a>
</template>

<script setup lang="ts">
import { linkProps } from './link'
defineOptions({
  name: 'PuikLink',
})

const props = defineProps(linkProps)
</script>
