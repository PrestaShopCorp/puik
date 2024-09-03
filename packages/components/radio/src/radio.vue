<template>
  <div
    class="puik-radio"
    :data-test="dataTest"
  >
    <input
      :id="id ?? refId"
      ref="radioInputRef"
      v-model="valueModel"
      v-bind="{
        ...(label && label.trim() && { 'aria-labelledby': `label-${id ?? refId}` }),
        ...(srDescriptionOnly && srDescriptionOnly.trim() && { 'aria-describedby': `sr-description-only-${id ?? refId}` } || ariaDescribedby && ariaDescribedby.trim() && { 'aria-describedby': ariaDescribedby }),
      }"
      :aria-label="ariaLabel || label ||'undefined'"
      :value="value"
      :checked="valueModel === value"
      :disabled="disabled"
      class="puik-radio__input"
      type="radio"
      :name="name"
      :aria-disabled="disabled"
      :data-test="dataTest != undefined ? `input-${dataTest}` : undefined"
      @focus="handleFocus"
    >
    <label
      v-if="$slots.default || label"
      :id="`label-${id ?? refId}`"
      :for="id ??refId"
      class="puik-radio__label"
      :data-test="dataTest != undefined ? `label-${dataTest}` : undefined"
    >
      <slot>{{ label }}</slot>
    </label>
    <span
      v-if="srDescriptionOnly"
      :id="`sr-description-only-${id ?? refId}`"
      class="puik-sr-only"
    >
      {{ srDescriptionOnly }}
    </span>
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

const refId = ref(`puik-radio-${generateId()}`);

const isFocus = ref(false);
const handleFocus = () => (isFocus.value = true);
const valueModel = useVModel(props, 'modelValue', emit);
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-radio.scss';
</style>
