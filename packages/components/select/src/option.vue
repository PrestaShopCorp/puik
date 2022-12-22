<template>
  <ListboxOption
    v-show="option.visible"
    v-slot="{ active }"
    :disabled="disabled"
    :value="option"
    as="template"
  >
    <li
      class="puik-option"
      :class="{
        'puik-option--active': active,
        'puik-option--selected': selectedValue === value,
        'puik-option--disabled': disabled,
      }"
    >
      <span class="puik-option__label">{{ label }}</span>
      <puik-icon
        v-if="selectedValue === value"
        icon="checked"
        font-size="1.25rem"
        class="puik-option__selected-icon"
      />
    </li>
  </ListboxOption>
</template>

<script setup lang="ts">
import { computed, inject, reactive, toRaw, watch } from 'vue'
import { ListboxOption } from '@headlessui/vue'
import { PuikIcon } from '@puik/components/icon'
import { isObject } from '@puik/utils'
import { optionProps } from './option'
import { selectKey } from './select'
defineOptions({
  name: 'PuikOption',
})

const props = defineProps(optionProps)

const { optionsList, selectedValue, handleAutoComplete, labelKey, query } =
  inject(selectKey)!

const label = computed(
  () =>
    props.label ?? (isObject(props.value) ? props.value[labelKey] : props.value)
)

const option = reactive({
  value: props.value,
  label: label.value,
  visible: true,
})

const sendLabel = () => {
  if (props.disabled) return

  return handleAutoComplete(label.value)
}

optionsList.value.push(option)

watch(
  selectedValue,
  (newValue) => {
    if (toRaw(props.value) === toRaw(newValue)) {
      sendLabel()
    }
  },
  { immediate: true }
)

watch(query, (value) => {
  option.visible = label.value.toLowerCase().includes(value)
})
</script>
