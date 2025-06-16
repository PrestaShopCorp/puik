---
description :  A Divider is simple UI element used to visually separate content into distinct sections. It can be oriented horizontally or vertically, depending on the layout requirements.
name: divider
outline: deep
---
<script setup>
  import Divider from '@vitepress/components/Divider.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'orientation',
      default: 'horizontal',
      type: 'PuikDividerOrientation',
      details: `
enum PuikDividerOrientation {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}
      `,
      description: 'defines the horizontal or vertical orientation of the divider component'
    },
    {
      prop: 'dataTest',
      default: 'undefined',
      type: 'string',
      description: 'sets data-test attribute for e2e tests purpose'
    }
  ];
</script>

# Divider

 A `Divider` is simple UI element used to visually separate content into distinct sections. It can be oriented horizontally or vertically, depending on the layout requirements.

## Overview

::: raw
<ComponentOverview>
  <Divider />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <puik-divider
    :orientation="orientation"
    :data-test="dataTest"
  />
</template>
<script lang="ts">
import { ref } from 'vue';

const orientation = ref('horizontal');
const dataTest = ref('puik-divider');
</script>

```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
