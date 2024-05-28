<template>
  <h4
    class="puik-menu-item-title"
    :data-test="dataTest != undefined ? `title-${dataTest}` : undefined"
  >
    <slot />
  </h4>
</template>

<script setup lang="ts">
import { MenuItemTitleProps } from './menu-item-title';

defineOptions({
  name: 'PuikMenuItemTitle'
});

defineProps<MenuItemTitleProps>();
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-menu-item-title.scss';
</style>
