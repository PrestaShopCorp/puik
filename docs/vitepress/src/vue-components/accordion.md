---
description: An Accordion is a UI component that organizes content into collapsible sections, allowing users to expand or collapse specific panels to view or hide related information.
name: accordion
aria: https://www.w3.org/WAI/ARIA/apg/patterns/accordion
outline: deep
---

<script setup>
  import Accordion from '@vitepress/components/Accordion.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'name',
      default: 'none',
      type: 'string',
      description: 'Name used by parent AccordionGroup to expand/collapse accordion',
      required: true
    },
    {
      prop: 'title',
      default: 'none',
      type: 'string',
      description: 'Title displayed in the header',
      required: false
    },
    {
      prop: 'subTitle',
      default: 'none',
      type: 'string',
      description: 'Sub title displayed in the header',
      required: false
    },
    {
      prop: 'icon',
      default: 'none',
      type: 'string',
      description: 'Sets the name for header icon (see Material Symbols: https://fonts.google.com/icons)',
      required: false
    },
    {
      prop: 'disabled',
      default: 'none',
      type: 'boolean',
      description: 'Sets accordion disabled',
      required: false
    },
    {
      prop: 'borderNone',
      default: 'none',
      type: 'boolean',
      description: 'Removes borders',
      required: false
    },
    {
      prop: 'dataTest',
      default: 'none',
      type: 'string',
      description: 'Sets the data-test attribute to target elements and facilitate end-to-end testing',
      required: false
    }
  ];

    const accordion_group_attributes = [
    {
      prop: 'modelValue',
      default: 'none',
      type: 'string | string[] | null',
      description: 'v-model to control expanded accordions',
      required: false
    },
    {
      prop: 'multiple',
      default: 'none',
      type: 'boolean',
      description: 'Allows multiple accordions to be expanded',
      required: false
    },
    {
      prop: 'contained',
      default: 'none',
      type: 'boolean',
      description: 'Removes space between accordion',
      required: false
    },
  ];
</script>

# Accordion

An `Accordion` is a UI component that organizes content into collapsible sections, allowing users to expand or collapse specific panels to view or hide related information.

## Overview

::: raw
<ComponentOverview>
  <Accordion />
</ComponentOverview>
:::

::: details Show Code

```vue
<template>
  <puik-accordion-group>
    <puik-accordion
      name="accordion name"
      title="accordion title"
      sub-title="accordion sub-title"
      icon="home"
    >
      Content of the accordion
    </puik-accordion>
  </puik-accordion-group>
</template>
```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
