---
description : A Radio input component allows users to select a single option from a set of choices.
name: radio
aria: https://www.w3.org/WAI/ARIA/apg/patterns/radio/
outline: deep
---
<script setup>
  import Radio from '@vitepress/components/Radio.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'id',
      type: 'string',
      default: 'undefined',
      description: '"id" attribute of the radio input (it is automatically generated if this prop is not present)'
    },
    {
      prop: 'name',
      type: 'string',
      default: 'undefined',
      description: '"name" attribute of the radio input'
    },
    {
      prop: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Label of the radio input'
    },
    {
      prop: 'ariaLabel',
      type: 'string',
      default: 'undefined',
      description: 'Sets the aria-label attribute for accessibility'
    },
    {
      prop: 'ariaDescribedby',
      type: 'string',
      default: 'undefined',
      description: 'Sets the aria-describedby attribute for accessibility (id of element that describes the input)'
    },
    {
      prop: 'srDescriptionOnly',
      type: 'string',
      default: 'undefined',
      description: 'Set a description for screen readers only (the description is contained in an automatically generated hidden span element)'
    },
    {
      prop: 'disabled',
      type: 'boolean',
      default: false,
      description: 'Set if the radio button is disabled'
    },
    {
      prop: 'value',
      type: 'boolean | string | number',
      default: 'undefined',
      description: 'Value of the radio button'
    },
    {
      prop: 'modelValue',
      type: 'boolean | string | number',
      default: 'undefined',
      description: 'v-model of the radio button'
    },
    {
      prop: 'default',
      type: 'string',
      default: 'undefined',
      description: 'Label of the radio button using the slot'
    },
    {
      prop: 'dataTest',
      type: 'string',
      default: 'undefined',
      description: 'Sets the data-test attribute of the input and the label `label-${dataTest}` `input-${dataTest}`'
    }
  ];
</script>

# Radio

A `Radio` input component allows users to select a single option from a set of choices.

## Overview

::: raw
<ComponentOverview>
  <Radio />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <puik-radio
    v-model="selectedValue"
    id="id_1"
    name="name_1"
    value="value 1"
    label="label prop"
    :disabled="false"
    aria-label="ariaLabel_1"
    aria-describedby="ariaDescribedby_1"
    sr-description-only="srDescriptionOnly_1"
    data-test="dataTest_1"
    @update:modelValue="selectedValue = $event"

  >
  </puik-radio>

  <puik-radio
    v-model="selectedValue"
    id="id_2"
    name="name_2"
    value="value 2"
    :disabled="false"
    aria-label="ariaLabel_2"
    aria-describedby="ariaDescribedby_2"
    sr-description-only="srDescriptionOnly_2"
    data-test="dataTest_2"
    @update:modelValue="selectedValue = $event"
  >
    Label slot
  </puik-radio>

  <puik-badge>modelValue: {{ selectedValue }}</puik-badge>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedValue = ref<string | null>(null);
</script>

```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
