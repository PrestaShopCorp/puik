---
description : A Label component is used to provide a caption for an input element, improving accessibility and usability. It should be associated with a form control using the **for** prop, which links the label to the corresponding input's **id**. The **Label** component also supports optional, required, and readonly states.
name: label
outline: deep
---
<script setup>
  import Label from '@vitepress/components/Label.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'for',
      default: 'undefined',
      type: 'string',
      required: true,
      description: 'ID of the input element this label is associated with'
    },
    {
      prop: 'optional',
      default: 'undefined',
      type: 'boolean',
      default: false,
      description: 'Marks the field as optional'
    },
    {
      prop: 'required',
      default: 'undefined',
      type: 'boolean',
      default: false,
      description: 'Marks the field as required'
    },
    {
      prop: 'readonly',
      default: false,
      type: 'boolean',
      description: 'Marks the field as readonly'
    },
    {
      prop: 'dataTest',
      default: 'undefined',
      type: 'string',
      description: 'Sets the data-test attribute for testing purposes'
    }
  ];
</script>

# Label

A `Label` component is used to provide a caption for an input element, improving accessibility and usability. It should be associated with a form control using the **for** prop, which links the label to the corresponding input's **id**. The **Label** component also supports optional, required, and readonly states.

## Overview

::: raw
<ComponentOverview>
  <Label />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <puik-label
    for="forLabel"
    :required="required"
    :optional="optional"
    :readonly="readonly"
    :data-test="dataTest"
  >
    My Label
  </puik-label>
</template>

<script>
import { ref } from 'vue';

const forLabel = ref('input');
const dataTest = ref('label-test');
const required = ref(true);
const optional = ref(false);
const readonly = ref(false);
</script>

```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
