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

<style lang="postcss">
@import '@prestashopcorp/puik-theme/src/base.postcss';
@import '@prestashopcorp/puik-theme/src/puik-menu-item.postcss';
</style>
