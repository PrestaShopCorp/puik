<template>
  <div class="puik-select">
    <Listbox v-model="selectedValue">
      <div class="puik-select__wrapper">
        <ListboxButton
          :disabled="disabled"
          class="puik-select__button"
          :class="{ 'puik-select__button--error': error || $slots.error }"
        >
          <span class="puik-select__selected">{{
            currentLabel || placeholder
          }}</span>
          <span class="puik-select__icon"> unfold_more </span>
        </ListboxButton>

        <transition
          leave-active-class="puik-select__transition__leave--active"
          leave-from-class="puik-select__transition__leave--from"
          leave-to-class="puik-select__transition__leave--to"
        >
          <ListboxOptions class="puik-select__options">
            <slot></slot>
          </ListboxOptions>
        </transition>
        <span v-if="error || $slots.error" class="puik-select__error"
          ><span class="puik-select__error__icon">error</span
          ><slot name="error">{{ error }}</slot></span
        >
      </div>
    </Listbox>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Listbox, ListboxButton, ListboxOptions } from '@headlessui/vue'
import { selectProps, selectEmits } from './select'
import type { Option } from './option'
defineOptions({
  name: 'PuikSelect',
})

const props = defineProps(selectProps)

const emit = defineEmits(selectEmits)

const selectedValue = computed({
  get() {
    return props.modelValue
  },
  set(selectedItem: Option) {
    emit('update:modelValue', selectedItem)
  },
})

const currentLabel = computed(() =>
  typeof selectedValue.value !== 'object'
    ? selectedValue.value
    : selectedValue.value[props.displayProperty]
)
</script>
