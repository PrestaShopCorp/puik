<template>
  <div class="puik-input">
    <div class="puik-input__wrapper" :class="inputClasses">
      <div v-if="$slots.prepend" class="puik-input__prepend">
        <slot name="prepend"></slot>
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
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <span
        v-if="type === 'password'"
        class="puik-input__reveal-password"
        @click="togglePasswordVisibility"
        >{{ passwordIsVisible ? 'visibility' : 'visibility_off' }}</span
      >
      <div v-else-if="$slots.append" class="puik-input__append">
        <slot name="append"></slot>
      </div>
      <puik-input-controls
        v-if="type === 'number'"
        @increase="increase"
        @decrease="decrease"
      ></puik-input-controls>
    </div>
    <div v-if="$slots.hint || $slots.error || error" class="puik-input__hint">
      <span
        v-show="!hideHint"
        v-if="$slots.hint && !error && !$slots.error"
        class="puik-input__hint__text"
        ><slot name="hint"></slot
      ></span>
      <span v-if="error || $slots.error" class="puik-input__hint__error"
        ><span class="puik-input__hint__error__icon">error</span
        ><slot name="error">{{ error }}</slot></span
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, useSlots } from 'vue'
import { isNumber } from '@vueuse/core'
import PuikInputControls from './controls/controls.vue'
import { inputEmits, inputProps } from './input'
defineOptions({
  name: 'PuikInput',
})
const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)
const slots = useSlots()
const isFocus = ref(false)
const passwordIsVisible = ref(false)

const inputClasses = computed(() => ({
  'puik-input__wrapper--focus': isFocus.value,
  'puik-input__wrapper--disabled': props.disabled,
  'puik-input__wrapper--success': props.success,
  'puik-input__wrapper--error': props.error || slots.error,
}))

const handleFocus = () => (isFocus.value = true)
const handleBlur = () => (isFocus.value = false)

const togglePasswordVisibility = () =>
  (passwordIsVisible.value = !passwordIsVisible.value)

const increase = () => {
  if (isNumber(value.value) && value.value < props.max) {
    value.value += props.step
  }
}
const decrease = () => {
  if (isNumber(value.value) && value.value > props.min) {
    value.value -= props.step
  }
}

const value = computed<string | number>({
  get() {
    if (isNumber(props.modelValue)) {
      return parseFloat(props.modelValue.toFixed(props.precision))
    }
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>
