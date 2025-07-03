---
description: A Switch component allows users to toggle between two states, such as on/off. It supports labels, accessibility, and disabled state.
name: switch
aria: https://www.w3.org/WAI/ARIA/apg/patterns/switch/
outline: deep
---

<script setup>
import Switch from '@vitepress/components/Switch.vue';
import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

const switch_attributes = [
  {
    prop: 'modelValue',
    type: 'boolean',
    default: false,
    description: 'v-model of the switch'
  },
  {
    prop: 'label',
    type: 'string',
    default: '',
    description: 'Label of the switch toggle (left side, prop or slot)'
  },
  {
    prop: 'labelRight',
    type: 'string',
    default: '',
    description: 'Right label of the switch toggle (prop or slot)'
  },
  {
    prop: 'disabled',
    type: 'boolean',
    default: false,
    description: 'Set if the switch toggle is disabled'
  },
  {
    prop: 'srLabel',
    type: 'string',
    default: '',
    description: 'Screen reader label (if no visible label is set)'
  },
  {
    prop: 'dataTest',
    type: 'string',
    default: '',
    description: 'Sets the data-test attribute'
  },
  {
    prop: 'default',
    type: 'string',
    default: '',
    description: 'Label of the switch toggle using the default slot'
  }
];
</script>

# Switch

A `Switch` component allows users to toggle between two states, such as on/off. It supports labels, accessibility, and disabled state.

## Overview

::: raw
<ComponentOverview>
  <Switch />
</ComponentOverview>
:::

::: details Show Code

```vue
<template>
  <puik-switch v-model="enabled" label="Switch Label" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const enabled = ref(false)
</script>

```

:::

## Props

::: raw
<DataAttributes :attributes="switch_attributes" />
:::

## Accessibility

- Uses `role="switch"` and `aria-checked` for screen readers.
- Use `srLabel` if no visible label is provided for accessibility.

## Slots

- `default` — Custom label (left side)
- `labelRight` — Custom right label

## Examples

```vue
<!-- With left label -->
<puik-switch v-model="enabled" label="Switch Label"></puik-switch>

<!-- With right label -->
<puik-switch v-model="enabled" label-right="Switch Label Right"></puik-switch>

<!-- With slot label -->
<puik-switch v-model="enabled">Switch Label Slot</puik-switch>

<!-- With slot right label -->
<puik-switch v-model="enabled"><template #labelRight>Switch Label Right Slot</template></puik-switch>

<!-- Disabled -->
<puik-switch v-model="enabled" disabled>Disabled</puik-switch>
```
