<template>
  <div class="puik-select">
    <Listbox v-model="selectedValue">
      <div class="puik-select__wrapper">
        <ListboxButton class="puik-select__button">
          <span class="puik-select__selected">{{
            selectedValue.label ? selectedValue.label : placeholder
          }}</span>
          <span class="puik-select__icon"> unfold_more </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions class="puik-select__options">
            <slot></slot>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Listbox, ListboxButton, ListboxOptions } from '@headlessui/vue'
import { selectProps, selectEmits, type Option } from './select'
defineOptions({
  name: 'PuikSelect',
})

const props = defineProps(selectProps)

const emit = defineEmits(selectEmits)

const selectedValue = computed<Option>({
  get() {
    return props.modelValue
  },
  set(selectedItem: Option) {
    emit('update:modelValue', selectedItem)
  },
})
</script>
