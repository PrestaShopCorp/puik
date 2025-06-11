---
title: Accordion
description: An Accordion is a UI component that organizes content into collapsible sections, allowing users to expand or collapse specific panels to view or hide related information.
name: accordion
aria: https://www.w3.org/WAI/ARIA/apg/patterns/accordion
---

<script setup>
  import Accordion from '@vitepress/components/Accordion.vue';
  import AccordionGroup from '@vitepress/components/AccordionGroup.vue';
  import DataAttributes from '@vitepress/components/DataAttributes.vue';

  const accordion_attributes = [
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

## Accordion

An Accordion is a UI component that organizes content into collapsible sections, allowing users to expand or collapse specific panels to view or hide related information.

<Accordion />

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

### API Reference

::: raw
<DataAttributes :attributes="accordion_attributes" />
:::

## Accordion Group

An Accordion Group manages multiple accordion items, ensuring only one section is expanded at a time (optional) or allowing multiple sections to be open simultaneously.

<AccordionGroup />

::: details Show Code

```vue
<template>
  <puik-accordion-group
    v-model="expandedAccordion"
    :multiple="multiple"
    :contained="contained"
  >
    <puik-accordion
      title="Title 1"
      name="accordion-1"
    >
      Content 1
    </puik-accordion>
    <puik-accordion
      title="Title 2"
      name="accordion-2"
    >
      Content 2
    </puik-accordion>
    <puik-accordion
      title="Title 3"
      name="accordion-3"
    >
      Content 3
    </puik-accordion>
  </puik-accordion-group>
</template>
```

:::

### API Reference

::: raw
<DataAttributes :attributes="accordion_group_attributes" />
:::
