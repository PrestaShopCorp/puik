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
      :data-test="dataTest != undefined ? `input-${dataTest}` : undefined"
    >
    <label
      v-if="$slots.default || label"
      :for="id"
      class="puik-checkbox__label"
      :data-test="dataTest != undefined ? `label-${dataTest}` : undefined"
    >
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
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

watch(
  () => props.indeterminate,
  (value: boolean) => {
    if (value && checked.value === true) {
      checkboxInputRef.value?.click(); // Set the checkbox state at false. Like this when we click on indeterminate checkbox it will be checked
    }
  }
);
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-checkbox.scss';
</style>
