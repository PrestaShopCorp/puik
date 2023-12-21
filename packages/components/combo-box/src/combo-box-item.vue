<template>
  <ComboboxItem
    class="puik-combobox__item"
    :value="value"
  >
    <slot>{{ label }}</slot>
  </ComboboxItem>
</template>

<script setup lang="ts">
import { ComboboxItem } from 'radix-vue';
import { ComboBoxItemProps } from './combo-box-item';
defineOptions({
  name: 'PuikComboBoxItem'
});

defineProps<ComboBoxItemProps>();

console.log('created');
</script>
