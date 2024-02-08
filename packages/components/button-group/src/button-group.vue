<template>
  <div class="puik-button-group">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { useVModel } from '@vueuse/core';
import { type ButtonGroupProps, ButtonGroupKey } from './button-group';

defineOptions({
  name: 'PuikButtonGroup'
});

const props = defineProps<ButtonGroupProps>();
const selected = useVModel(props, 'modelValue');

provide(ButtonGroupKey, { selected });
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-button-group.scss';
</style>
