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

<style lang="css">
@import '../../tab-navigation-group-panels/style/index.css';
</style>
