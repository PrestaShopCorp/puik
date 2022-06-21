<template>
  <div class="puik-select">
    <Listbox v-model="selectedValue" multiple>
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
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions class="puik-select__options">
            <ListboxOption
              v-for="(option, idx) in options"
              :key="idx"
              v-slot="{ active, selected, disabled }"
              :disabled="
                typeof option === 'object' ? option[optionDisabled] : false
              "
              :value="option"
              as="template"
            >
              <puik-option
                :active="active"
                :selected="selected"
                :disabled="disabled"
                >{{
                  typeof option !== 'object' ? option : option[optionLabel]
                }}</puik-option
              >
            </ListboxOption>
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
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { PuikOption } from '../../option'
import { selectProps, selectEmits } from './select'
defineOptions({
  name: 'PuikSelect',
})

const props = defineProps(selectProps)

const emit = defineEmits(selectEmits)

const selectedValue = computed({
  get() {
    return props.modelValue
  },
  set(selectedItem: string | number | Record<string, any>) {
    emit('update:modelValue', selectedItem)
  },
})

const currentLabel = computed(() =>
  typeof selectedValue.value !== 'object'
    ? selectedValue.value
    : selectedValue.value[props.optionLabel]
)
</script>
