<template>
  <div class="puik-radio" :class="radioClasses">
    <input
      :id="id"
      ref="radioInputRef"
      v-model="checked"
      :disabled="disabled"
      class="puik-radio__input"
      type="checkbox"
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
import { useVModel } from '@vueuse/core'
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

const checked = useVModel(props, 'modelValue', emit)

const handleFocus = () => (isFocus.value = true)

const radioClasses = computed(() => ({
  'puik-radio--focus': isFocus.value,
  'puik-radio--disabled': props.disabled,
  'puik-radio__label': props.disabled,
}))
</script>
