<template>
  <div
    class="puik-checkbox"
    :data-test="dataTest"
  >
    <input
      :id="id"
      ref="checkboxInputRef"
      v-model="checked"
      class="puik-checkbox__input"
      type="checkbox"
      :indeterminate="indeterminate"
      :disabled="disabled"
      :aria-checked="indeterminate ? 'mixed' : checked"
      :aria-disabled="disabled"
      :aria-label="ariaLabel ? ariaLabel : label ? label : srLabel ? srLabel : undefined"
      :aria-labelledby="getAriaLabelledBy()"
      :data-test="dataTest != undefined ? `input-${dataTest}` : undefined"
    >
    <label
      v-if="props.srLabel"
      :id="`label-sr-${id}`"
      :key="slots.default ? 'default' : 'sr-only'"
      :for="id"
      class="puik-sr-only"
      :data-test="dataTest != undefined ? `label-sr-${dataTest}` : undefined"
    >
      {{ srLabel }}
    </label>
    <label
      v-else
      :id="`label-${id}`"
      :for="id"
      class="puik-checkbox__label"
      :data-test="dataTest != undefined ? `label-${dataTest}` : undefined"
    >
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, useSlots } from 'vue';
import { useVModel } from '@vueuse/core';
import { generateId } from '@prestashopcorp/puik-utils';
import { type CheckboxProps } from './checkbox';

defineOptions({
  name: 'PuikCheckbox'
});

const props = defineProps<CheckboxProps>();
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>();

const id = `puik-checkbox-${generateId()}`;
const checkboxInputRef = ref<HTMLInputElement>();
const checked = useVModel(props, 'modelValue', emit);
const slots = useSlots();

watch(
  () => props.indeterminate,
  (value: boolean) => {
    if (value && checked.value === true) {
      checkboxInputRef.value?.click();
    }
  }
);

const getAriaLabelledBy = () => {
  return props.srLabel ? `label-sr-${id}` : `label-${id}`;
};
</script>

<style lang="css">
@import '../style/index.css';
</style>
