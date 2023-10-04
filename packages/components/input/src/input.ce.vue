<template>
  <div ref="CeRef" class="puik-input">
    <div class="puik-input__wrapper" :class="inputClasses">
      <div v-if="hasSlotPrepend" class="puik-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        :id="id"
        v-model="internalValue"
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
        @input="updateCeRefModelValue"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <span
        v-if="type === 'password'"
        class="puik-input__reveal-password"
        @click="togglePasswordVisibility"
        >{{ passwordIsVisible ? 'visibility' : 'visibility_off' }}</span
      >
      <div v-if="hasSlotAppend" class="puik-input__append">
        <slot name="append"></slot>
      </div>
      <puik-input-controls
        v-if="type === 'number'"
        :disabled="disabled"
        @increase="increase"
        @decrease="decrease"
      ></puik-input-controls>
    </div>
    <div v-if="hasSlotHint || hint || hasError" class="puik-input__hint">
      <span v-show="!hideHint" v-if="!hasError" class="puik-input__hint__text">
        <slot v-if="hint && !hasSlotHint" name="hint">{{ hint }}</slot>
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
import { inputProps } from './input'

defineOptions({
  name: 'PuikInput',
})
const props = defineProps(inputProps)
const slots = useSlots()
const isFocus = ref(false)
const passwordIsVisible = ref(false)

const CeRef = ref<HTMLElement | null>(null)
const internalValue = ref<string | number>('')

const updateCeRefModelValue = () => {
  CeRef?.value?.setAttribute('model-value', String(internalValue.value))
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
  if (isNumber(internalValue.value) && internalValue.value < props.max) {
    internalValue.value += props.step
  }
}
const decrease = () => {
  if (isNumber(internalValue.value) && internalValue.value > props.min) {
    internalValue.value -= props.step
  }
}

const hasError = computed(() => props.error || slotIsEmpty(slots.error))
</script>

<style lang="scss">
@use '../../../theme/src/base';
@use '../../../theme/src/input.scss';
</style>
