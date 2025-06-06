<template>
  <div
    class="puik-input"
    :data-test="dataTest"
  >
    <label
      v-if="srLabel && id"
      :for="id"
      class="puik-sr-only"
    >
      {{ srLabel }}
    </label>
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
        v-bind="{
          ...(id ? { 'id': id } : {}),
          ... $attrs
        }"
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
        :minlength="minLength"
        :maxlength="maxLength"
        :step="type === 'number' ? step : undefined"
        :data-test="dataTest != undefined ? `input-${dataTest}` : undefined"
        :aria-label="ariaLabel ? ariaLabel : srLabel ? srLabel : 'undefined'"
        :aria-live="ariaLive"
        @focus="handleFocus"
        @blur="handleBlur"
      >
      <span
        v-if="type === 'password'"
        class="puik-input__reveal-password"
        role="button"
        :aria-pressed="passwordIsVisible ? 'true' : 'false'"
        tabindex="0"
        @click="togglePasswordVisibility"
        @keydown.enter="togglePasswordVisibility"
        @keydown.space.prevent="togglePasswordVisibility"
      >
        {{ passwordIsVisible ? 'visibility' : 'visibility_off' }}
      </span>

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
        role="alert"
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
    <div
      v-if="props.maxLength"
      :class="[
        'puik-input__character-count',
        {
          'puik-input__character-count--error': characterLength > (props.maxLength ?? 0)
        }
      ]"
    >
      <span>{{ characterLength }}/{{ maxLength }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from 'vue';
import { PuikAriaLive } from '@prestashopcorp/puik-components/base/src/common';
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
  max: Number.POSITIVE_INFINITY,
  ariaLive: PuikAriaLive.Polite
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
const characterLength = computed(() => value.value?.toString().length || 0);

const inputClasses = computed(() => ({
  'puik-input__wrapper--focus': isFocus.value,
  'puik-input__wrapper--disabled': props.disabled,
  'puik-input__wrapper--success': props.success,
  'puik-input__wrapper--error': hasError.value
}));
</script>
