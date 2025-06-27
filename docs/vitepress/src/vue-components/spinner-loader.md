---
description: A SpinnerLoader displays a spinning indicator to show loading or progress states. It supports different sizes, colors, label positions, and accessibility options.
name: spinner-loader
outline: deep
---

<script setup>
import SpinnerLoader from '@vitepress/components/SpinnerLoader.vue';
import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

const spinner_loader_attributes = [
  {
    prop: 'size',
    type: 'PuikSpinnerLoaderSizes',
    default: 'md',
    control: 'select',
    options: ['sm', 'md', 'lg'],
    description: 'Sets the spinner size'
  },
  {
    prop: 'color',
    type: 'PuikSpinnerLoaderColors',
    default: 'primary',
    control: 'select',
    options: ['primary', 'reverse'],
    description: 'Sets the spinner color'
  },
  {
    prop: 'label',
    type: 'string',
    default: '',
    control: 'text',
    description: 'Set label below or right of the spinner'
  },
  {
    prop: 'position',
    type: 'PuikSpinnerLoaderPositions',
    default: 'bottom',
    control: 'select',
    options: ['bottom', 'right'],
    description: 'Set label position (bottom or right of the spinner)'
  },
  {
    prop: 'dataTest',
    type: 'string',
    default: 'spinner-loader',
    control: 'text',
    description: 'Sets the data-test attribute on the spinner loader'
  }
];
</script>

# SpinnerLoader

A `SpinnerLoader` displays a spinning indicator to show loading or progress states. It supports different sizes, colors, label positions, and accessibility options.

## Overview

::: raw
<ComponentOverview>
  <SpinnerLoader />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <div class="flex flex-col items-center gap-6">
    <puik-spinner-loader
      size="lg"
      color="primary"
      label="Loading large"
      position="bottom"
      data-test="spinner-loader-lg"
    />
    <puik-spinner-loader
      size="md"
      color="reverse"
      label="Loading medium"
      position="right"
      data-test="spinner-loader-md"
    />
    <puik-spinner-loader
      size="sm"
      color="primary"
      :label="label"
      :position="position"
      :data-test="dataTest"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const label = ref('Loading small')
const position = ref('bottom')
const dataTest = ref('spinner-loader-sm')
</script>

```

:::

## Props

::: raw
<DataAttributes :attributes="spinner_loader_attributes" />
:::

## Accessibility

- Uses `role="status"` and `aria-live="polite"` for screen readers.
- The label is visually associated with the spinner for context.
