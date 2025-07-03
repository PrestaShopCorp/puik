---
description : A SkeletonLoader
name: skeleton-loader
outline: deep
---
<script setup>
  import SkeletonLoader from '@vitepress/components/SkeletonLoader.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const skeleton_loader_attributes = [
    {
      prop: 'variant',
      type: 'PuikSkeletonLoaderVariants',
      details: `
enum PuikSkeletonLoaderVariants {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  Jumbotron = 'jumbotron',
  MegaJumbotron = 'mega-jumbotron',
  TextSmall = 'text-small',
  TextMedium = 'text-medium',
  TextLarge = 'text-large',
  Badge = 'badge',
  Tag = 'tag',
  Image = 'image',
  Graph = 'graph',
  Video = 'video',
}
      `,
      default: 'text-medium',
      description: 'Sets the skeleton loader variant'
    },
    {
      prop: 'width',
      type: 'string',
      default: 'undefined',
      description: 'Force the skeleton loader width'
    },
    {
      prop: 'height',
      type: 'string',
      default: 'undefined',
      description: 'Force the skeleton loader height'
    },
    {
      prop: 'tag',
      type: 'string',
      default: 'div',
      description: 'Sets the balise used as root element in the skeleton loader'
    }
  ];

  const skeleton_loader_group_attributes = [
    {
      prop: 'tag',
      type: 'string',
      default: 'div',
      description: 'Sets the balise used as root element in the skeleton loader group'
    },
    {
      prop: 'default',
      type: 'VNode',
      control: 'none',
      description: 'Sets the skeleton loader group content, can be anything, but skeleton loader must be wrapped in it (for accessibility purpose)'
    }
  ];

</script>

# SkeletonLoader

A `SkeletonLoader` is a UI component that displays a placeholder animation while content is loading, helping to improve perceived performance and provide visual feedback to users.

## Overview

::: raw
<ComponentOverview>
  <SkeletonLoader />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <puik-skeleton-loader-group>
    <template v-for="variant in skeletonLoaderVariants" :key="variant">
      <puik-skeleton-loader
        :variant="variant"
        class="mb-4"
      />
    </template>
  </puik-skeleton-loader-group>
</template>

<script setup lang="ts">
import { PuikSkeletonLoaderVariants } from '@prestashopcorp/puik-components';

const skeletonLoaderVariants = Object.values(PuikSkeletonLoaderVariants);
</script>

```

:::

## API Reference

### Skeleton loader Props

::: raw
<DataAttributes :attributes="skeleton_loader_attributes" />
:::

### Skeleton loader group Props

is a wrapper component that groups multiple `SkeletonLoader` components together. It ensures proper structure and accessibility when displaying several skeleton loaders as a single unit.

::: raw
<DataAttributes :attributes="skeleton_loader_group_attributes" />
:::
