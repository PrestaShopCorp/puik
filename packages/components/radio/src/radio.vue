<template>
  <div
    class="puik-radio"
    :data-test="dataTest"
  >
    <input
      :id="id"
      ref="radioInputRef"
      v-model="valueModel"
      :value="value"
      :checked="valueModel === value"
      :disabled="disabled"
      class="puik-radio__input"
      type="radio"
      :name="name"
      :data-test="dataTest != undefined ? `input-${dataTest}` : undefined"
      @focus="handleFocus"
    >
    <label
      v-if="$slots.default || label"
      :for="id"
      class="puik-radio__label"
      :data-test="dataTest != undefined ? `label-${dataTest}` : undefined"
    >
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useVModel } from '@vueuse/core';
import { generateId } from '@prestashopcorp/puik-utils';
import type { RadioProps } from './radio';
defineOptions({
  name: 'PuikRadio'
});
const props = defineProps<RadioProps>();
const emit = defineEmits<{
  'update:modelValue': [value: boolean | string | number]
}>();
const isFocus = ref(false);
const id = `puik-radio-${generateId()}`;

const handleFocus = () => (isFocus.value = true);

const valueModel = useVModel(props, 'modelValue', emit);
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-radio.scss';
</style>
