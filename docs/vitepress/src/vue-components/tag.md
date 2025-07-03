---
description: A Tag component displays a label, status, or category. It supports color variants, sizes, icons, truncation with tooltip, and accessibility.
name: tag
outline: deep
---

<script setup>
import Tag from '@vitepress/components/Tag.vue';
import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

const tag_attributes = [
  {
    prop: 'id',
    type: 'string',
    default: undefined,
    description: "Prop which will correspond to the component's html id attribute. NB: must not start with a number"
  },
  {
    prop: 'content',
    type: 'string',
    default: 'default tag',
    description: 'The text content (truncated and shown in tooltip if ≥ 30 chars)'
  },
  {
    prop: 'size',
    type: 'PuikTagSizes',
    details: `
enum PuikTagSizes {
  Default = 'default',
  Small = 'small',
}
    `,
    default: 'default',
    options: ['default', 'small'],
    description: 'Size variants of tag component (default, small)'
  },
  {
    prop: 'variant',
    type: 'PuikTagVariants',
    details: `
export enum PuikTagVariants {
  Neutral = 'neutral',
  Blue = 'blue',
  Yellow = 'yellow',
  Green = 'green',
  Purple = 'purple',
}
    `,
    default: 'neutral',
    options: ['neutral', 'blue', 'yellow', 'green', 'purple'],
    description: 'Color variants of tag component'
  },
  {
    prop: 'icon',
    type: 'string',
    default: '',
    description: 'Sets the icon name (from Material Symbols: https://fonts.google.com/icons)'
  },
  {
    prop: 'tooltipPosition',
    type: 'PuikTooltipPositions',
    details: `
enum PuikTooltipPositions {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
}
    `,
    default: 'bottom',
    description: 'Position of the tooltip (if content is truncated)'
  },
  {
    prop: 'disabled',
    type: 'boolean',
    default: false,
    description: 'Disables the Tag component'
  },
  {
    prop: 'dataTest',
    type: 'string',
    default: '',
    description: 'Sets the data-test attribute `content-${dataTest}` `tooltip-${dataTest}`'
  }
];
</script>

# Tag

A `Tag` component displays a label, status, or category. It supports color variants, sizes, icons, truncation with tooltip, and accessibility.

## Overview

::: raw
<ComponentOverview>
  <Tag />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <div class="flex flex-col items-center gap-4">
    <puik-tag
      id="puik-tag-default"
      content="default tag"
      size="default"
      variant="neutral"
      data-test="tag-default"
    />
    <puik-tag
      id="puik-tag-blue"
      content="blue tag"
      size="default"
      variant="blue"
      data-test="tag-blue"
    />
    <puik-tag
      id="puik-tag-small"
      content="small size"
      size="small"
      variant="green"
      data-test="tag-small"
    />
    <puik-tag
      id="puik-tag-icon"
      content="with icon tag"
      icon="favorite"
      variant="purple"
      data-test="tag-icon"
    />
    <puik-tag
      id="puik-tag-disabled"
      content="disabled tag"
      :disabled="true"
      data-test="tag-disabled"
    />
    <puik-tag
      id="puik-tag-long"
      content="very long text content very long text content"
      tooltip-position="bottom"
      data-test="tag-long"
    />
  </div>
</template>

```

:::

## Props

::: raw
<DataAttributes :attributes="tag_attributes" />
:::

## Accessibility

- Uses semantic HTML and tooltips for truncated content.
- The `content` is always accessible via tooltip if truncated.

## Examples

```vue
<!-- Default tag -->
<puik-tag content="default tag" />

<!-- Color variants -->
<puik-tag variant="blue" content="blue tag" />
<puik-tag variant="yellow" content="yellow tag" />
<puik-tag variant="green" content="green tag" />
<puik-tag variant="purple" content="purple tag" />

<!-- Size variants -->
<puik-tag size="default" content="default size" />
<puik-tag size="small" content="small size" />

<!-- With icon -->
<puik-tag icon="favorite" content="with icon tag" />

<!-- Disabled -->
<puik-tag content="disabled tag" :disabled="true" />

<!-- With long text (shows tooltip) -->
<puik-tag content="very long text content very long text content" tooltip-position="bottom" />
```
