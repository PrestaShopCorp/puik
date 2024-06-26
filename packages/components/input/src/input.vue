<template>
  <div
    class="puik-input"
    :data-test="dataTest"
  >
    <div
      class="puik-input__wrapper"
      :class="inputClasses"
    >
      <div
        v-if="$slots.prepend"
        class="puik-input__prepend"
      >
        <slot name="prepend" />
      </div>
      <input
        :id="id"
        v-model="value"
        class="puik-input__field"
        :placeholder="placeholder"
        :disabled="disabled"
        :type="passwordIsVisible ? 'text' : type"
        :required="required"
        :autocomplete="autocomplete"
        :name="name"
        :min="type === 'number' ? min : undefined"
        :max="type === 'number' ? max : undefined"
        :step="type === 'number' ? step : undefined"
        :data-test="dataTest != undefined ? `input-${dataTest}` : undefined"
        v-bind="$attrs"
        @focus="handleFocus"
        @blur="handleBlur"
      >
      <span
        v-if="type === 'password'"
        class="puik-input__reveal-password"
        @click="togglePasswordVisibility"
      >{{ passwordIsVisible ? 'visibility' : 'visibility_off' }}</span>
      <div
        v-else-if="$slots.append"
        class="puik-input__append"
      >
        <slot name="append" />
      </div>
      <puik-input-controls
        v-if="type === 'number'"
        :disabled="disabled"
        @increase="increase"
        @decrease="decrease"
      />
    </div>
    <div
      v-if="$slots.hint || hasError"
      class="puik-input__hint"
    >
      <span
        v-show="!hideHint"
        v-if="$slots.hint && !hasError"
        class="puik-input__hint__text"
      ><slot name="hint" /></span>
      <div
        v-if="hasError"
        class="puik-input__hint__error"
      >
        <puik-icon
          icon="error"
          class="puik-input__hint__error__icon"
          font-size="1.25rem"
        />
        <span
          class="puik-input__hint__error__text"
          :data-test="dataTest != undefined ? `error-${dataTest}` : undefined"
        >
          <slot name="error">{{ error }}</slot>
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, useSlots } from 'vue';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import { slotIsEmpty, isNumber } from '@prestashopcorp/puik-utils';
import PuikInputControls from './controls/controls.vue';
import { PuikInputTypes, type InputProps } from './input';
defineOptions({
  name: 'PuikInput'
});
const props = withDefaults(defineProps<InputProps>(), {
  type: PuikInputTypes.Text,
  step: 1,
  min: Number.NEGATIVE_INFINITY,
  max: Number.POSITIVE_INFINITY
});
const emit = defineEmits<{
  'update:modelValue': [value: string | number | undefined]
}>();
const slots = useSlots();
const isFocus = ref(false);
const passwordIsVisible = ref(false);

const handleFocus = () => (isFocus.value = true);
const handleBlur = () => (isFocus.value = false);

const togglePasswordVisibility = () =>
  (passwordIsVisible.value = !passwordIsVisible.value);

const value = computed<string | number | undefined>({
  get() {
    if (isNumber(props.modelValue)) {
      return parseFloat(props.modelValue.toFixed(props.precision));
    }
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  }
});

const increase = () => {
  if (isNumber(value.value) && value.value < props.max) {
    value.value += props.step;
  }
};
const decrease = () => {
  if (isNumber(value.value) && value.value > props.min) {
    value.value -= props.step;
  }
};
const hasError = computed(() => props.error || slotIsEmpty(slots.error));

const inputClasses = computed(() => ({
  'puik-input__wrapper--focus': isFocus.value,
  'puik-input__wrapper--disabled': props.disabled,
  'puik-input__wrapper--success': props.success,
  'puik-input__wrapper--error': hasError.value
}));
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-input.scss';
@use '@prestashopcorp/puik-theme/src/puik-icon.scss';
</style>
