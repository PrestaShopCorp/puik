<template>
  <ListboxOption
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
      :data-test="dataTest"
    >
      <slot class="puik-option__label">
        {{ label }}
      </slot>
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
import { computed, inject, toRaw, watch } from 'vue';
import { ListboxOption } from '@headlessui/vue';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import { isObject } from '@prestashopcorp/puik-utils';
import { type OptionProps } from './option';
import { selectKey } from './select';
defineOptions({
  name: 'PuikOption'
});

const props = defineProps<OptionProps>();

const { optionsList, selectedValue, handleAutoComplete, labelKey } =
  inject(selectKey)!;

const label = computed(
  () =>
    props.label ??
    (isObject(props.value) ? props.value[labelKey] : props.value)
);

const option = {
  value: props.value,
  label: label.value
};

const sendLabel = () => {
  if (props.disabled) return;

  return handleAutoComplete(label.value);
};

optionsList.value.push(option);

watch(
  selectedValue,
  (newValue) => {
    if (toRaw(props.value) === toRaw(newValue)) {
      sendLabel();
    }
  },
  { immediate: true }
);
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-option.scss';
</style>
