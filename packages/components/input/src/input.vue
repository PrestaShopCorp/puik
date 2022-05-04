<template>
  <div class="puik-input">
    <div
      class="puik-input__wrapper"
      :class="{
        'puik-input__wrapper--focus': isFocus,
        'puik-input__wrapper--disabled': disabled,
        'puik-input__wrapper--success': success,
        'puik-input__wrapper--error': error,
      }"
    >
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
    </div>
    <div v-if="$slots.helpText || error" class="puik-input__help-text">
      <span v-show="!hideHelpText" v-if="$slots.helpText && !error"
        ><slot name="helpText"></slot
      ></span>
      <span v-if="error" class="puik-input__help-text__error"
        ><span class="puik-input__help-text__error__icon">error</span
        >{{ error }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { inputEmits, inputProps } from './input'
defineOptions({
  name: 'PuikInput',
})
const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)
const isFocus = ref(false)
const passwordIsVisible = ref(false)

const handleFocus = () => (isFocus.value = true)
const handleBlur = () => (isFocus.value = false)
const togglePasswordVisibility = () =>
  (passwordIsVisible.value = !passwordIsVisible.value)

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>
