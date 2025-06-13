---
description : A breadcrumb trail consists of a list of links to the parent pages of the current page in hierarchical order. It helps users find their place within a website or web application. Breadcrumbs are often placed horizontally before a page's main content.
name: breadcrumb
outline: deep
---
<script setup>
  import Breadcrumb from '@vitepress/components/Breadcrumb.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'items',
      default: 'undefined',
      type: 'BreadcrumbItem[]',
      details: `
interface BreadBreadcrumbItem {
  label: string,
  to: string | undefined,
  href: string | undefined,
  target: '_blank' | '_self' | '_parent' | '_top' | undefined,
  dataTest: string | undefined,
}
      `,
      description: 'Link displayed in breadcrumb',
      required: false
    },
    {
      prop: 'itemsJson',
      default: 'undefined',
      type: 'json',
      details: `
A JSON string representing an array of BreadcrumbItem
      `,
      description: 'The breadcrumb items as a JSON string. Use this prop when using the component as a Web Component. For regular Vue usage, prefer the `items` prop',
      required: false
    },
    {
      prop: 'separatorIcon',
      default: 'keyboard_arrow_right',
      type: 'string',
      description: 'Sets icon between icon (see Material Symbols: https://fonts.google.com/icons)',
      required: false
    },
    {
      prop: 'icon',
      default: 'undefined',
      type: 'string',
      description: 'Sets icon used before first link (from Material Symbols: https://fonts.google.com/icons)',
      required: false
    }
  ];
</script>

# Breadcrumb

A `breadcrumb` trail consists of a list of links to the parent pages of the current page in hierarchical order. It helps users find their place within a website or web application. Breadcrumbs are often placed horizontally before a page's main content.

## Overview

::: raw
<ComponentOverview>
  <Breadcrumb />
</ComponentOverview>
:::

::: details Show Code

```vue
<template>
  <puik-breadcrumb
    :items="items"
    :icon="icon"
  ></puik-breadcrumb>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
  {
    label: 'First link',
    href: '#'
  },
  {
    label: 'Second link',
    href: '#'
  },
  {
    label: 'Third link',
    to: 'name',
    target: '_blank'
  }
]);
const icon = ref('home');
</script>
```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
