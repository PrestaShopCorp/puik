<template>
  <div class="puik-menu-item">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PuikMenuItem'
});
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-menu-item.scss';
</style>
