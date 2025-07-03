---
description : A `Badge` component is used to display concise status or notification information. It supports different visual variants such as success, warning, danger, info, and neutral, making it suitable for highlighting statuses or counts in your application. The component is accessible and customizable through various props.
name: badge
outline: deep
---
<script setup>
  import Badge from '@vitepress/components/Badge.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'variant',
      default: 'neutral',
      type: 'PuikBadgeVariants',
      details: `
enum PuikBadgeVariants {
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
  Info = 'info',
  Neutral = 'neutral',
}
      `,
      description: 'Sets the badge variant',
      required: false
    },
    {
      prop: 'ariaLive',
      default: 'polite',
      type: 'PuikAvatarMode',
      details: `
enum PuikAriaLive {
  Polite = 'polite',
  Assertive = 'assertive',
  Off = 'off'
}
      `,
      description: 'Sets the aria-live attribute for accessibility',
      required: false
    },
    {
      prop: 'ariaLabel',
      default: 'undefined',
      type: 'string',
      description: 'Size variants of avatar component (small, medium, large, jumbo)',
      required: false
    },
    {
      prop: 'dataTest',
      default: 'undefined',
      type: 'string',
      description: 'Sets the data-test attribute on the badge',
      required: false
    }
  ];
</script>

# Badge

A `Badge` component is used to display concise status or notification information. It supports different visual variants such as success, warning, danger, info, and neutral, making it suitable for highlighting statuses or counts in your application. The component is accessible and customizable through various props.

## Overview

::: raw
<ComponentOverview>
  <Badge />
</ComponentOverview>
:::

::: details Show Code

```vue
<template>
  <puik-badge
    :variant="variant"
    :aria-live="ariaLive"
    :aria-label="ariaLabel"
    :data-test="dataTest"
  >
    badge content
  </puik-badge>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PuikBadgeVariants, PuikAriaLive } from '@prestashopcorp/puik-components';

const variant = ref(PuikBadgeVariants.Neutral);
const ariaLive = ref(PuikAriaLive.Polite);
const ariaLabel = ref('aria label');
const dataTest = ref('badge');
</script>
```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
