---
description: An Accordion Group component provides a way to organize multiple accordion panels, allowing users to expand or collapse sections to reveal or hide content. It manages the expanded state of its child accordions, supporting both single and multiple expanded panels, and can be configured to display accordions in a contained layout without spacing between them.
name: accordion group
aria: https://www.w3.org/WAI/ARIA/apg/patterns/accordion
outline: deep
---

<script setup>
  import AccordionGroup from '@vitepress/components/AccordionGroup.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'modelValue',
      default: 'undefined',
      type: 'string | string[] | null',
      description: 'v-model to control expanded accordions',
      required: false
    },
    {
      prop: 'multiple',
      default: 'undefined',
      type: 'boolean',
      description: 'Allows multiple accordions to be expanded',
      required: false
    },
    {
      prop: 'contained',
      default: 'undefined',
      type: 'boolean',
      description: 'Removes space between accordion',
      required: false
    },
  ];
</script>

# Accordion Group

The `Accordion Group` component provides a way to organize multiple accordion panels, allowing users to expand or collapse sections to reveal or hide content. It manages the expanded state of its child accordions, supporting both single and multiple expanded panels, and can be configured to display accordions in a contained layout without spacing between them.

## Overview

::: raw
<ComponentOverview>
  <AccordionGroup />
</ComponentOverview>
:::

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

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
