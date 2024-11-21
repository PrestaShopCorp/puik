<template>
  <div :style="{ 'z-index': props.zIndex }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { GroupOptionsProps } from './group-options';
defineOptions({
  name: 'PuikGroupOptions'
});

const props = withDefaults(defineProps<GroupOptionsProps>(), {
  zIndex: 100
});
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-group-options.scss';
</style>
