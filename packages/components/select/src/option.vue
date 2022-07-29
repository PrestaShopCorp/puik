<template>
  <ListboxOption
    v-slot="{ active, selected }"
    :disabled="disabled"
    :value="value"
    as="template"
  >
    <li
      class="puik-option"
      :class="{
        'puik-option--active': active,
        'puik-option--selected': selected,
        'puik-option--disabled': disabled,
      }"
    >
      <span class="puik-option__label">{{ label || value }}</span>
      <span v-if="selected" class="puik-option__selected-icon"> checked </span>
    </li>
  </ListboxOption>
</template>

<script setup lang="ts">
import { inject, watch, toRaw } from 'vue'
import { ListboxOption } from '@headlessui/vue'
import { isObject } from '@puik/utils'
import { optionProps } from './option'
import { selectKey } from './select'
defineOptions({
  name: 'PuikOption',
})

const props = defineProps(optionProps)

const { setCurrentLabel, selectedValue } = inject(selectKey)!

const sendLabel = () => {
  if (props.disabled) return

  if (props.label) {
    return setCurrentLabel(props.label)
  }
  return setCurrentLabel(!isObject(props.value) ? props.value : '')
}

watch(
  selectedValue,
  (newValue) => {
    if (toRaw(props.value) === toRaw(newValue)) {
      sendLabel()
    }
  },
  { immediate: true }
)
</script>
