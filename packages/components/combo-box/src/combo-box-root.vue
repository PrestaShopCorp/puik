<script setup lang="ts">
import { ComboboxRoot, useForwardPropsEmits, ComboboxRootEmits, ComboboxRootProps } from 'radix-vue';

const props = defineProps<ComboboxRootProps>();
const emits = defineEmits<ComboboxRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <ComboboxRoot
    v-bind="forwarded"
    :open="true"
    :model-value="''"
  >
    <slot />
  </ComboboxRoot>
</template>
