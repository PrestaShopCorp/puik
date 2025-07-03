---
description :  A ProgressBar is a visual indicator used to display the progress of a task or operation. It can be customized by setting the percentage prop to reflect the current completion state.
name: progress-bar
outline: deep
---
<script setup>
  import ProgressBar from '@vitepress/components/ProgressBar.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'percentage',
      type: 'number',
      default: 50,
      description: 'Sets the progress percentage (from 0 to 100)'
    },
    {
      prop: 'dataTest',
      type: 'string',
      default: 'undefined',
      description: 'Sets the data-test attribute for end-to-end (E2E) testing purposes'
    }
  ];
</script>

# ProgressBar

 A `ProgressBar` is a visual indicator used to display the progress of a task or operation. It can be customized by setting the **percentage** prop to reflect the current completion state.

## Overview

::: raw
<ComponentOverview>
  <ProgressBar />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <puik-progress-bar :percentage="percentage" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const percentage = ref(50)
</script>

```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
