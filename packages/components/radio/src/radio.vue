<template>
  <div class="puik-radio__group" :class="radioClasses">
    <input
      :id="id"
      ref="radioInputRef"
      v-model="checked"
      :checked="checked"
      :disabled="disabled"
      class="puik-radio"
      type="radio"
      :name="name"
      @focus="handleFocus"
    />
    <label v-if="$slots.default || label" class="puik-radio__label">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useVModel } from '@vueuse/core'
import { useLocale } from '@puik/hooks'
import { generateId } from '@puik/utils'
import { radioEmits, radioProps } from './radio'
defineOptions({
  name: 'Radio',
})
const props = defineProps(radioProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
const isFocus = ref(false)
const id = `puik-radio-${generateId()}`
const radioInputRef = ref(document.createElement('input'))
const checked = useVModel(props, 'modelValue', emit)
const { t } = useLocale()

const handleFocus = () => (isFocus.value = true)

const radioClasses = computed(() => ({
  'puik-radio__group--focus': isFocus.value,
  'puik-radio__group--disabled': props.disabled,
}))
</script>
