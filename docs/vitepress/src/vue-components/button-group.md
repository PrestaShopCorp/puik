---
description: A button group is a set of buttons displayed together, allowing users to perform related actions or select from a group of options. Button groups help organize actions in a compact and visually consistent way, improving usability and interface clarity.
name: button group
outline: deep
---
<script setup>
  import ButtonGroup from '@vitepress/components/ButtonGroup.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'modelValue',
      default: 'undefined',
      type: 'string | number | object | []',
      description: 'Selected button v-model',
      required: false
    }
  ];
</script>

# Button Group

A `button group` is a set of buttons displayed together, allowing users to perform related actions or select from a group of options. Button groups help organize actions in a compact and visually consistent way, improving usability and interface clarity.

## Overview

::: raw
<ComponentOverview>
  <ButtonGroup />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <puik-button-group v-model="selectedValue">
    <puik-button :variant="(selectedValue === 'btn1') ? 'primary' : 'secondary'" value="btn1">Button 1</puik-button>
    <puik-button :variant="(selectedValue === 'btn2') ? 'primary' : 'secondary'" value="btn2">Button 2</puik-button>
    <puik-button :variant="(selectedValue === 'btn3') ? 'primary' : 'secondary'" value="btn3">Button 3</puik-button>
  </puik-button-group>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedValue = ref('btn1');
</script>

```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
