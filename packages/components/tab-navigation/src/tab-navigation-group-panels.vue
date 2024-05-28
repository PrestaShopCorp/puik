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

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-tab-navigation-group-panels.scss';
</style>
