<template>
  <component
    :is="tag"
    v-if="isExpanded"
    class="puik-sidebar-title"
    :data-test="dataTest != undefined ? `sidebarTitle-${dataTest}` : undefined"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { sidebarKey } from './sidebar';
import { type SidebarTitleProps } from './sidebar-title';

defineOptions({
  name: 'PuikSidebarTitle'
});

withDefaults(defineProps<SidebarTitleProps>(), {
  tag: 'h3'
});
const sidebarValues = inject(sidebarKey, null);
const isExpanded = computed(() => sidebarValues?.extended.value);
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-sidebar-title.scss';
</style>
