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
import { ref } from 'vue'
import { useVModel } from '@vueuse/core'
import { generateId } from '@puik/utils'
import { radioProps, radioEmits } from './radio'
defineOptions({
  name: 'PuikRadio',
})
const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)
const isFocus = ref(false)
const id = `puik-radio-${generateId()}`

const handleFocus = () => (isFocus.value = true)

const valueModel = useVModel(props, 'modelValue', emit)
</script>
