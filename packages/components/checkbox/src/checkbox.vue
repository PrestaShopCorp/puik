<template>
  <div class="puik-checkbox">
    <input
      :id="id"
      ref="checkboxInputRef"
      v-model="checked"
      class="puik-checkbox__input"
      type="checkbox"
      :indeterminate="indeterminate"
      :disabled="disabled"
    />
    <label
      v-if="$slots.default || label"
      :for="id"
      class="puik-checkbox__label"
    >
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useVModel } from '@vueuse/core'
import { generateId } from '@puik/utils'
import { checkboxProps } from './checkbox'

const props = defineProps(checkboxProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const id = `puik-checkbox-${generateId()}`
const checkboxInputRef = ref<HTMLInputElement>()
const checked = useVModel(props, 'modelValue', emit)

watch(
  () => props.indeterminate,
  (value: boolean) => {
    if (value && checked.value === true) {
      checkboxInputRef.value?.click() // Set the checkbox state at false. Like this when we click on indeterminate checkbox it will be checked
    }
  }
)
</script>
