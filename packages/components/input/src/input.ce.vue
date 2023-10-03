<template>
  <div ref="inputCeRef" class="puik-input">
    <div class="puik-input__wrapper" :class="inputClasses">
      <div v-if="slotPrepend" class="puik-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        :id="id"
        :value="internalModelValue"
        class="puik-input__field"
        :placeholder="placeholder"
        :type="passwordIsVisible ? 'text' : type"
        :disabled="disabled"
        :required="required"
        :autocomplete="autocomplete"
        :name="name"
        :min="type === 'number' ? min : undefined"
        :max="type === 'number' ? max : undefined"
        :step="type === 'number' ? step : undefined"
        @input="updateInternalModel"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <span
        v-if="type === 'password'"
        class="puik-input__reveal-password"
        @click="togglePasswordVisibility"
        >{{ passwordIsVisible ? 'visibility' : 'visibility_off' }}</span
      >
      <div v-if="slotAppend" class="puik-input__append">
        <slot name="append"></slot>
      </div>
      <puik-input-controls
        v-if="type === 'number'"
        :disabled="disabled"
        @increase="increase"
        @decrease="decrease"
      ></puik-input-controls>
    </div>
    <div v-if="slotHint || hint || hasError" class="puik-input__hint">
      <span v-show="!hideHint" v-if="!hasError" class="puik-input__hint__text">
        <slot v-if="hint && !slotHint" name="hint">{{ hint }}</slot>
        <slot v-else name="hint"></slot>
      </span>
      <div v-if="hasError" class="puik-input__hint__error">
        <puik-icon
          icon="error"
          class="puik-input__hint__error__icon"
          font-size="1.25rem"
        ></puik-icon>
        <span class="puik-input__hint__error__text">
          <slot name="error">{{ error }}</slot>
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, useSlots } from 'vue'
import { isNumber } from '@vueuse/core'
import { PuikIcon } from '@puik/components/icon'
import { slotIsEmpty } from '@puik/utils'
import PuikInputControls from './controls/controls.vue'
import { inputEmits, inputProps } from './input'

defineOptions({
  name: 'PuikInput',
})
const props = defineProps(inputProps)
// const emit = defineEmits(inputEmits)
const slots = useSlots()
const isFocus = ref(false)
const passwordIsVisible = ref(false)

const internalModelValue = ref<string | number>('')
const inputCeRef = ref<HTMLElement | null>(null)

const updateInternalModel = (event: Event) => {
  const internalInput = event.target as HTMLInputElement
  internalModelValue.value = internalInput.value
  if (inputCeRef.value) {
    inputCeRef.value.setAttribute('model-value', internalModelValue.value)
  }
}

const inputClasses = computed(() => ({
  'puik-input__wrapper--focus': isFocus.value,
  'puik-input__wrapper--disabled': props.disabled,
  'puik-input__wrapper--success': props.success,
  'puik-input__wrapper--error': hasError.value,
}))

const handleFocus = () => (isFocus.value = true)
const handleBlur = () => (isFocus.value = false)

const togglePasswordVisibility = () =>
  (passwordIsVisible.value = !passwordIsVisible.value)

const increase = () => {
  let numberInputValue = Number(internalModelValue.value)
  if (isNumber(numberInputValue) && numberInputValue < props.max) {
    internalModelValue.value = numberInputValue += props.step
    inputCeRef?.value?.setAttribute(
      'model-value',
      String(internalModelValue.value)
    )
  }
}

const decrease = () => {
  let numberInputValue = Number(internalModelValue.value)
  if (isNumber(numberInputValue) && numberInputValue > props.min) {
    internalModelValue.value = numberInputValue -= props.step
    inputCeRef?.value?.setAttribute(
      'model-value',
      String(internalModelValue.value)
    )
  }
}

const hasError = computed(() => props.error || slotIsEmpty(slots.error))

// const Numbervalue = computed<string | number>({
//   get() {
//     if (isNumber(internalModelValue.value)) {
//       return parseFloat(internalModelValue.value.toFixed(props.precision))
//     }
//     console.log(internalModelValue.value)
//     return internalModelValue.value
//   },
//   set(value) {
//     emit('update:modelValue', value)
//   },
// })
</script>

<style lang="scss">
@use '../../../theme/src/base';
@use '../../../theme/src/input.scss';
</style>
