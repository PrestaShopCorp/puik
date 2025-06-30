---
description: A Tooltip component displays contextual information when users hover, focus, or tap an element. It supports heading, description, position, accessibility, and more.
name: tooltip
outline: deep
---

<script setup>
import Tooltip from '@vitepress/components/Tooltip.vue';
import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

const tooltip_attributes = [
  {
    prop: 'heading',
    type: 'string',
    default: undefined,
    description: 'Sets the tooltip heading (also available as a slot)'
  },
  {
    prop: 'description',
    type: 'string',
    default: undefined,
    description: 'Sets the tooltip description (also available as a slot)'
  },
  {
    prop: 'position',
    type: 'PuikTooltipPositions',
    details: `
enum PuikTooltipPositions {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
}
    `,
    default: 'top',
    description: 'Sets the tooltip position'
  },
  {
    prop: 'isDisabled',
    type: 'boolean',
    default: false,
    description: 'Enable or disable the tooltip'
  },
  {
    prop: 'maxWidth',
    type: 'string',
    default: 'max-content',
    description: 'Sets a maximum width for the tooltip (in px)'
  },
  {
    prop: 'zindex',
    type: 'number',
    default: 1000,
    description: 'Sets the z-index level'
  },
  {
    prop: 'disappearDelay',
    type: 'number',
    default: 50,
    description: 'Sets the timer to make the tooltip disappear (in ms)'
  },
  {
    prop: 'dataTest',
    type: 'string',
    default: undefined,
    description: 'Sets the data-test attribute on the tooltip and its content'
  }
];
</script>

# Tooltip

A `Tooltip` component displays contextual information when users hover, focus, or tap an element. It supports heading, description, position, accessibility, and more.

## Overview

::: raw
<ComponentOverview>
  <Tooltip />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <div class="flex flex-wrap gap-8 items-center justify-center">
    <puik-tooltip heading="Heading" description="This is a tooltip" position="top" data-test="tooltip-top">
      <puik-icon icon="help_outline" font-size="1.25rem" />
    </puik-tooltip>
    <puik-tooltip heading="Heading" description="This is a tooltip" position="bottom" data-test="tooltip-bottom">
      <puik-icon icon="help_outline" font-size="1.25rem" />
    </puik-tooltip>
    <puik-tooltip heading="Heading" description="This is a tooltip" position="left" data-test="tooltip-left">
      <puik-icon icon="help_outline" font-size="1.25rem" />
    </puik-tooltip>
    <puik-tooltip heading="Heading" description="This is a tooltip" position="right" data-test="tooltip-right">
      <puik-icon icon="help_outline" font-size="1.25rem" />
    </puik-tooltip>
    <puik-tooltip :is-disabled="true" heading="Heading" description="No tooltip" position="top" data-test="tooltip-disabled">
      <puik-button>There is no tooltip</puik-button>
    </puik-tooltip>
    <puik-tooltip position="bottom" data-test="tooltip-custom">
      <puik-icon icon="help_outline" font-size="1.25rem" />
      <template #heading>Custom heading</template>
      <template #description>Custom description</template>
    </puik-tooltip>
  </div>
</template>

```

:::

## Props

::: raw
<DataAttributes :attributes="tooltip_attributes" />
:::

## Accessibility

- Uses `role="tooltip"` and `aria-describedby` for screen readers.
- Supports keyboard and mouse interactions.
- Heading and description can be provided as props or slots.

## Examples

```vue
<!-- Tooltip on an icon -->
<puik-tooltip heading="Heading" description="This is a tooltip" position="top">
  <puik-icon icon="help_outline" font-size="1.25rem" />
</puik-tooltip>

<!-- Tooltip on a button -->
<puik-tooltip heading="Heading" description="Tooltip around a button" position="right">
  <puik-button>Button</puik-button>
</puik-tooltip>

<!-- Disabled tooltip -->
<puik-tooltip :is-disabled="true" heading="Heading" description="No tooltip">
  <puik-button>There is no tooltip</puik-button>
</puik-tooltip>

<!-- Custom slots -->
<puik-tooltip position="bottom">
  <puik-icon icon="help_outline" font-size="1.25rem" />
  <template #heading>Custom heading</template>
  <template #description>Custom description</template>
</puik-tooltip>
```
