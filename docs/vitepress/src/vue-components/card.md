---
description :  A Card  component is a versatile container used to group related content and actions in a visually distinct panel. It typically includes elements such as a header, body, and footer, and can be used to display information, images, or interactive elements in a structured and aesthetically pleasing way. Cards are commonly used in dashboards, lists, and other UI layouts to present content in a modular and organized manner.
name: card
outline: deep
---
<script setup>
  import Card from '@vitepress/components/Card.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'variant',
      default: 'default',
      type: 'PuikCardVariants',
      details: `
enum PuikCardVariants {
  Highlight = 'highlight',
  Blue = 'blue',
  Purple = 'purple',
  Amber = 'amber',
  Green = 'green',
  Default = 'default',
}
      `,
      description: 'Sets the card variant'
    },
    {
      prop: 'ariaLabel',
      default: 'undefined',
      type: 'string',
      description: 'Sets the aria-label attribute for accessibility'
    }
  ];
</script>

# Card

 A `Card`  component is a versatile container used to group related content and actions in a visually distinct panel. It typically includes elements such as a header, body, and footer, and can be used to display information, images, or interactive elements in a structured and aesthetically pleasing way. Cards are commonly used in dashboards, lists, and other UI layouts to present content in a modular and organized manner.

## Overview

::: raw
<ComponentOverview>
  <Card />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <puik-card
    :variant="variant"
  >
    <h3 class="puik-h3">Card title</h3>
    <p>Card content</p>
  </puik-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const variant = ref('primary');
</script>


```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
