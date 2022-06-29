<template>
  <div class="puik-radio">
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
      @focus="handleFocus"
    />
    <label v-if="$slots.default || label" :for="id" class="puik-radio__label">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { generateId } from '@puik/utils'
import { radioProps, radioEmits } from './radio'
defineOptions({
  name: 'Radio',
})
const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)
const isFocus = ref(false)
const id = `puik-radio-${generateId()}`
const radioInputRef = ref(document.createElement('input'))

const handleFocus = () => (isFocus.value = true)

const valueModel = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>
