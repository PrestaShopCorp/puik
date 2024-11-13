<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { GroupOptionsProps } from './group-options';
defineOptions({
  name: 'PuikGroupOptions'
});

const props = withDefaults(defineProps<GroupOptionsProps>(), {
  open: true
});

console.log(props);

// watch(() => props.open, (newValue) => {
//   openRef.value = newValue;
// });
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-group-options.scss';
</style>
