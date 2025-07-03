---
description : A `Checkbox` component that allows the user to toggle between checked and not checked.
name: checkbox
aria: https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
outline: deep
---
<script setup>
  import Checkbox from '@vitepress/components/Checkbox.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'label',
      default: 'undefined',
      type: 'string',
      description: 'Sets the checkbox label'
    },
    {
      prop: 'ariaLabel',
      default: 'undefined',
      type: 'string',
      description: 'If you are planning to set the label via default slot instead of using label prop then in that case you should set the aria-label for better accessibility'
    },
    {
      prop: 'srLabel',
      default: 'undefined',
      type: 'string',
      description:
        'In case the checkbox has no label (neither via the label prop nor via the default slot) then you should consider setting this prop for a better experience when using screen readers (although the label is not visible)'
    },
    {
      prop: 'indeterminate',
      default: false,
      type: 'boolean',
      description: 'Sets the indeterminate checkbox state'
    },
    {
      prop: 'modelValue',
      default: 'undefined',
      type: 'any',
      description: 'v-model of the checkbox'
    },
    {
      prop: 'disabled',
      default: false,
      type: 'boolean',
      description: 'Sets the checkbox as disabled'
    },
    {
      prop: 'dataTest',
      default: 'undefined',
      type: 'string',
      control: 'text',
      description:
        'Sets the data-test attribute for the label and the input `label-${dataTest}` `input-${dataTest}`'
    }
  ];
</script>

# Checkbox

A `Checkbox` component that allows the user to toggle between checked and not checked.

## Overview

::: raw
<ComponentOverview>
  <Checkbox />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <div class="flex items-center justify-center">
    <puik-checkbox
      v-model="modelValue"
      :label="label"
      :aria-label="ariaLabel"
      :sr-label="srLabel"
      :indeterminate="indeterminate"
      :disabled="disabled"
      :data-test="dataTest"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modelValue = ref(false);
const label = ref('Label');
const ariaLabel = ref('');
const srLabel = ref('');
const indeterminate = ref(false);
const disabled = ref(false);
const dataTest = ref('');
</script>

```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
