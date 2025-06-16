---
description : A Link is used to create navigational links in your application. It supports both standard anchor tags and Vue Router links, allowing you to navigate to external URLs or internal routes. The component provides options for accessibility, different sizes, high contrast mode, and customization for use in articles.
name: link
outline: deep
---
<script setup>
  import Link from '@vitepress/components/Link.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'href',
      type: 'string',
      default: 'undefined',
      description: 'Sets a link (changes link to "a" html tag)'
    },
    {
      prop: 'to',
      default: 'undefined',
      type: 'string',
      description: 'Sets a vue router link (changes link to "router-link" or html tag)'
    },
    {
      prop: 'target',
      default: '_self',
      type: 'PuikLinkTargetVariants',
      details: `
enum PuikLinkTargetVariants {
  Blank = '_blank',
  Self = '_self',
  Parent = '_parent',
  Top = '_top',
}
      `,
      description: 'Sets the link target. If you set it to "_blank" the icon "open in new" is displayed'
    },
    {
      prop: 'ariaLabel',
      default: 'undefined',
      type: 'string',
      description: 'Sets the aria-label attribute for accessibility'
    },
    {
      prop: 'size',
      default: 'md',
      type: 'PuikLinkSizes',
      details: `
enum PuikLinkSizes {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}
      `,
      description: 'Sets the link font size'
    },
    {
      prop: 'highContrast',
      default: false,
      type: 'boolean',
      description: 'Sets the link in high contrast mode by changing the gray underline color'
    },
    {
      prop: 'articles',
      default: false,
      type: 'boolean',
      description: 'Sets the link in articles mode, adding the purple color for the visited stated'
    },
    {
      prop: 'default',
      default: 'undefined',
      type: 'string',
      control: 'text',
      description: 'Label of the link'
    },
    {
      prop: 'title',
      type: 'string',
      default: 'undefined',
      control: 'text',
      description: 'Title displayed in tooltips then your cursor stay in link'
    },
    {
      prop: 'dataTest',
      default: 'undefined',
      type: 'string',
      description: 'Sets the data-test attribute for testing purposes'
    }
  ];
</script>

# Link

A `Link` is used to create navigational links in your application. It supports both standard anchor tags and Vue Router links, allowing you to navigate to external URLs or internal routes. The component provides options for accessibility, different sizes, high contrast mode, and customization for use in articles.

## Overview

::: raw
<ComponentOverview>
  <Link />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <div class="flex items-center justify-center">
  <puik-link
    size="medium"
    href="#"
    target="_self"
    title="tooltip for the link"
    aria-label="link aria-label"
    :high-contrast="false"
    :articles="false"
    data-test="link-test"
  >
    link content
  </puik-link>
  </div>
</template>

```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
