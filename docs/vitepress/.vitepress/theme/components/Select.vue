<template>
  <div class="flex flex-col gap-y-10">
    <PuikSelect
      v-model="selectedOptionsSingle"
      id="single-select-id"
      name="single-select-name"
      label="Select an option"
      :options="options_single_select"
      :required="false"
      :optional="false"
      :searchable="false"
      :optionLabelKey="label"
      :optionValueKey="value"
      :optionDisabledKey="disabled"
      :multiSelect="false"
      :disabled="false"
      error=""
      autocomplete="off"
      prependInputIcon=""
      :open="false"
      :zIndex="10"
      dataTest="single-select"
    />

  <PuikSelect
      v-model="selectedOptionsMulti"
      id="multi-select-id"
      name="multi-select-name"
      label="Select option(s)"
      :options="options_multi_select"
      :required="false"
      :optional="false"
      :searchable="false"
      :optionLabelKey="label"
      :optionValueKey="value"
      :optionDisabledKey="disabled"
      :multiSelect="true"
      :disabled="false"
      error=""
      autocomplete="off"
      prependInputIcon=""
      :open="false"
      :zIndex="10"
      dataTest="multi-select"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PuikOption, type OptionType } from '@prestashopcorp/puik-components';

const options_single_select = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
];

const options_multi_select = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
];
const selectedOptionsSingle = ref();
const selectedOptionsMulti = ref<OptionType[] | null>();

selectedOptionsMulti.value = [];

const label = 'label';
const value = 'value';
const disabled = 'disabled';
</script>
