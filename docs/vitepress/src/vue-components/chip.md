---
description : A Chip component is a compact UI element used to display information, attributes, or actions. It can include text, an optional icon, and supports different sizes. Chips are commonly used for filtering, categorization, or representing input values.
name: chip
outline: deep
---
<script setup>
  import Chip from '@vitepress/components/Chip.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'id',
      default: 'undefined',
      type: 'string',
      description: 'Prop which will correspond to the component\'s html id attribute. NB: must not start with a number'
    },
    {
      prop: 'content',
      default: 'undefined',
      type: 'string',
      description: 'The text content (NB: if its length is equal to or greater than 30 characters it will be truncated and will be displayed entirely on hover in a tooltip)'
    },
    {
      prop: 'size',
      default: 'default',
      type: 'PuikChipSizeVariants',
      details: `
enum PuikChipSizeVariants {
  Default = 'default',
  Small = 'small',
}
      `,
      description:
        'Size variants of chip component'
    },
    {
      prop: 'icon',
      default: 'undefined',
      type: 'string',
      description: 'Sets icon on the left side of the chip (from Material Symbols: https://fonts.google.com/icons)'
    },
    {
      prop: 'disabled',
      default: 'false',
      type: 'boolean',
      description: 'Disables the Chip component'
    },
    {
      prop: 'tooltipPosition',
      default: 'bottom',
      type: 'PuikTooltipPositions',
      details: `
enum PuikTooltipPositions {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
}
      `,
      description: 'Position of the tooltip (NB: a tooltip appears if the content length is equal to or greater than 30 characters).'
    }
  ];
</script>

# Chip

A `Chip` component is a compact UI element used to display information, attributes, or actions. It can include text, an optional icon, and supports different sizes. Chips are commonly used for filtering, categorization, or representing input values.

## Overview

::: raw
<ComponentOverview>
  <Chip />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <puik-chip
    :id="id"
    :content="content"
    :size="size"
    :icon="icon"
    :disabled="disabled"
    :tooltipPosition="tooltipPosition"
    @close="handleCloseChip()"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const id = ref('puik-chip-id');
const content = ref('chip content');
const size = ref('default');
const icon = ref('home');
const disabled = ref(false);
const tooltipPosition = ref('bottom');

const handleCloseChip = () => {
  console.log('Chip closed');
};
</script>

```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
