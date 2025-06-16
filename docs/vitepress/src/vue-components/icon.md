---
description : An `Icon` helps users quickly identify and interact with features or information. The **Icon** component supports Material Symbols and can be customized in terms of size, color, and accessibility attributes.
name: icon
outline: deep
---
<script setup>
  import Icon from '@vitepress/components/Icon.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'icon',
      default: 'undefined',
      type: 'string',
      description: 'Sets the icon name (see Material Symbols: https://fonts.google.com/icons)'
    },
    {
      prop: 'nodeType',
      default: 'div',
      type: 'string (HTML tags)',
      description: 'Sets the HTML node type'
    },
    {
      prop: 'fontSize',
      default: '1rem',
      type: 'string | number',
      description: 'Sets the icon font size value'
    },
    {
      prop: 'color',
      default: '#00000',
      type: 'string',
      description: 'Sets the icon color'
    },
    {
      prop: 'fill',
      default: 1,
      type: 'number',
      description: 'sets fill attribute of icon'
    },
    {
      prop: 'isDisabled',
      default: false,
      type: 'boolean',
      description: 'Sets disabled state of icon'
    },
    {
      prop: 'ariaLabel',
      default: 'undefined',
      type: 'string',
      description: 'Sets the aria-label attribute for accessibility (if this prop is not present the default aria-label will be set to the icon name)'
    },
    {
      prop: 'dataTest',
      default: 'undefined',
      type: 'string',
      description: 'Sets the data-test attribute'
    },
  ];
</script>

# Icon

An `Icon` helps users quickly identify and interact with features or information. The **Icon** component supports Material Symbols and can be customized in terms of size, color, and accessibility attributes.

## Overview

::: raw
<ComponentOverview>
  <Icon />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <puik-icon
    :icon="icon"
    :font-size="fontSize"
    :color="color"
    :node-type="nodeType"
    :fill="fill"
    :is-disabled="isDisabled"
    :data-test="dataTest"
    :aria-label="ariaLabel"
  />
</template>
<script lang="ts">
import { ref } from 'vue';

const icon = ref('check');
const fontSize = ref('70px');
const color = ref('green');
const nodeType = ref('span');
const fill = ref(1);
const isDisabled = ref(false);
const dataTest = ref('puik-icon');
const ariaLabel = ref('check icon');
</script>

```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
