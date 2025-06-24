---
description : A Select component allows users to choose option(s) from a dropdown list. It is commonly used in forms and interfaces where a predefined set of choices is required.
name: select
outline: deep
---
<script setup>
  import Select from '@vitepress/components/Select.vue';
  import SelectWithOptionsSlot from '@vitepress/components/SelectWithOptionsSlot.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const select_attributes = [
  {
    prop: 'modelValue',
    type: 'any',
    default: 'undefined',
    description: 'Corresponds to the selected option (or selected options in the case of multi-select)'
  },
  {
    prop: 'id',
    type: 'string',
    default: 'select-id',
    description: 'Sets the id attribute of the select input'
  },
  {
    prop: 'name',
    type: 'string',
    default: 'select-name',
    description: 'Sets the name attribute of the select input'
  },
  {
    prop: 'label',
    type: 'string',
    default: 'Select an option',
    description: 'Sets the label of the select input'
  },
  {
    prop: 'required',
    type: 'boolean',
    default: false,
    description: 'Indicates whether select is required or not'
  },
  {
    prop: 'optional',
    type: 'boolean',
    default: false,
    description: 'Indicates whether select is optional or not'
  },
  {
    prop: 'options',
    type: 'Record<string, any>[]',
    default: 'undefined',
    description: 'Array of options passed to the component'
  },
  {
    prop: 'optionLabelKey',
    type: 'string',
    default: 'label',
    description: 'In the case of using objects as a options prop you can set which property of the object is the label'
  },
  {
    prop: 'optionValueKey',
    type: 'string',
    default: 'value',
    description: 'In the case of using objects as a options prop you can set which property of the object is the value'
  },
  {
    prop: 'optionDisabledKey',
    type: 'string',
    default: 'disabled',
    description: 'In case of using objects as option props, you can define which property of the object makes the option disabled'
  },
  {
    prop: 'multiSelect',
    type: 'boolean',
    default: false,
    description: 'Indicates whether the select allows multiple choice'
  },
  {
    prop: 'searchable',
    type: 'boolean',
    default: false,
    description: 'Enables the search feature'
  },
  {
    prop: 'customFilterMethod',
    type: 'function',
    default: 'undefined',
    control: 'none',
    description: 'Use your own method to filter the options when using the search'
  },
  {
    prop: 'placeholder',
    type: 'string',
    default: 'Select an option',
    description: 'Sets a placeholder for the select'
  },
  {
    prop: 'searchPlaceholder',
    type: 'string',
    default: 'Search...',
    description: 'Sets a placeholder for the search input'
  },
  {
    prop: 'noMatchText',
    type: 'string',
    default: 'No results matched',
    description: 'Message to display when there are no results found'
  },
  {
    prop: 'disabled',
    type: 'boolean',
    default: false,
    description: 'Disables the select'
  },
  {
    prop: 'error',
    type: 'string',
    default: 'undefined',
    description: 'Displays an error message under the field and sets the select in an error state (also available as a slot named error)'
  },
  {
    prop: 'autocomplete',
    type: 'string',
    default: 'off',
    description: 'Enables browser autocompletion for the select'
  },
  {
    prop: 'prependInputIcon',
    type: 'string',
    default: 'undefined',
    description: 'Prepends a Material Symbols to the input (cf https://fonts.google.com/icons)'
  },
  {
    prop: 'open',
    type: 'boolean',
    default: false,
    description: 'Controls the opening of the select dropdown'
  },
  {
    prop: 'zIndex',
    type: 'number',
    default: 10,
    control: 'number',
    description: 'Sets z-index attribute of dropdown'
  },
  {
    prop: 'dataTest',
    type: 'string',
    default: 'data-test',
    description: 'Sets the data-test attribute (see details in documentation for all testid usages)'
  },
  {
    prop: 'ariaLabel',
    type: 'string',
    default: 'undefined',
    description: 'Sets the aria-label attribute for accessibility'
  }
  ];

  const option_attributes = [
  {
    prop: 'label',
    type: 'string | number',
    default: 'undefined',
    description: 'Sets the label of option'
  },
  {
    prop: 'value',
    type: 'string | number',
    default: 'undefined',
    description: 'Sets the value attribute of option'
  },
  {
    prop: 'disabled',
    type: 'boolean',
    default: false,
    description: 'Disables the option'
  },
  {
    prop: 'isSelected',
    type: 'boolean',
    default: false,
    description: 'Sets the selection state of option'
  },
  {
    prop: 'multiSelect',
    type: 'boolean',
    default: false,
    description: 'Enables this setting if it is an option of a multi-select'
  },
  {
    prop: 'dataTest',
    type: 'string',
    default: 'undefined',
    description: 'Sets the data-test attribute'
  },
  {
    prop: 'open',
    type: 'event',
    description: 'Event triggered when the option is clicked (always returns true in the case of multiselect otherwise false)'
  },
  {
    prop: 'select',
    type: 'event',
    description: 'Event triggered when the option is selected'
  }
  ]
</script>

# Select

A `Select` component allows users to choose option(s) from a dropdown list. It is commonly used in forms and interfaces where a predefined set of choices is required.

## Overview

::: raw
<ComponentOverview>
  <Select />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
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
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
const selectedOptionsMulti = ref([]);

const label = 'label';
const value = 'value';
const disabled = 'disabled';
</script>

```

:::

## API Reference

### Select Props

::: raw
<DataAttributes :attributes="select_attributes" />
:::

## PuikOption component

`PuikOption` is used internally in the PuikSelect component. PuikSelect can therefore be used directly (recommended in most cases - see select section) without going through the default slot unlike the specific cases below:

If the options are not objects but numbers or simple strings, you cannot use the options prop of PuikSelect .
If you want to customize the display of the options (see the groupby or prepend icon examples).
In these cases, you must go through the default slot of PuikSelect in which you find PuikOption sub-components.

It will be up to the user to manage the related events (e.g. open, select).

### Option Props

::: raw
<DataAttributes :attributes="option_attributes" />
:::

### Usage cases

#### Group By Example

::: raw
<ComponentOverview>
  <SelectWithOptionsSlot />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
    <puik-select
      v-model="selectedOption"
      :key="selectedOption"
      id="select-prepend-id"
      name="select-prepend-name"
      label="Select an option"
      :options="options"
      :open="openRef"
      @open="(state) => openRef = state"
    >
      <PuikDivider />
      <div class="px-2 py-1 puik-body-default-bold">Category A</div>
      <PuikDivider />
      <template v-for="option in options">
        <puik-option
          v-if="option.category === 'catégorie A'"
          :key="option.value"
          :label="option.label"
          :value="option.value"
          :disabled="option.disabled"
          :is-selected="selectedOption === option"
          @select="(payload) => handleSelect(payload)"
          @open="(state) => openRef = state"
        >
          {{ option.label }}
        </puik-option>
      </template>
      <PuikDivider />
      <div class="px-2 py-1 puik-body-default-bold">Category B</div>
      <PuikDivider />
      <template v-for="option in options">
        <puik-option
          v-if="option.category === 'catégorie B'"
          :key="option.value"
          :label="option.label"
          :value="option.value"
          :disabled="option.disabled"
          :is-selected="selectedOption === option"
          @select="(payload) => handleSelect(payload)"
          @open="(state) => openRef = state"
        >
          {{ option.label }}
        </puik-option>
      </template>
    </puik-select>

    <div class="puik-body-default">
      Selected option: <pre><code>{{ selectedOption }}</code></pre>
    </div>
</template>

<script setup lang="ts">
import { OptionType } from '@prestashopcorp/puik-components';
import { ref } from 'vue';

const openRef = ref(false);
const options = ref([
  { label: 'label 1', value: '1', category: 'catégorie A' },
  { label: 'label 2', value: '2', category: 'catégorie A' },
  { label: 'label 3', value: '3', category: 'catégorie A', disabled: true },
  { label: 'label 4', value: '4', category: 'catégorie B' },
  { label: 'label 5', value: '5', category: 'catégorie B' }
]);
const selectedOption = ref();
const handleSelect = (payload: OptionType) => {
  selectedOption.value === payload ? selectedOption.value = undefined : selectedOption.value = payload;
};
</script>

```

:::
