<template>
  <ListboxOption
    v-slot="{ active, selected, disabled }"
    :value="item"
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
      <span class="puik-option__label">{{ label ? label : value }}</span>
      <span v-if="selected" class="puik-option__selected-icon"> checked </span>
    </li>
  </ListboxOption>
</template>

<script setup lang="ts">
import { ListboxOption } from '@headlessui/vue'
import { optionProps } from './option'
defineOptions({
  name: 'PuikOption',
})

const props = defineProps(optionProps)
</script>
