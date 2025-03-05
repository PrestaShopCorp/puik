<template>
  <div class="puik-tab-navigation__group-panels">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PuikTabNavigationGroupPanels'
});
</script>

<style lang="postcss">
@import '@prestashopcorp/puik-theme/src/base.postcss';
@import '@prestashopcorp/puik-theme/src/puik-tab-navigation-group-panels.postcss';
</style>
