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

<style lang="css">
@import '../style/index.css';
</style>
