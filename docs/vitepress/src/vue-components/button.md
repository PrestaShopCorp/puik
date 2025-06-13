---
description : A button is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
name: button
outline: deep
---
<script setup>
  import Button from '@vitepress/components/Button.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'variant',
      default: 'primary',
      type: 'PuikButtonVariants',
      details: `
enum PuikButtonVariants {
  Primary = 'primary',
  PrimaryReverse = 'primary-reverse',
  Destructive = 'destructive',
  Secondary = 'secondary',
  SecondaryReverse = 'secondary-reverse',
  Tertiary = 'tertiary',
  Text = 'text',
  TextReverse = 'text-reverse',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
}
      `,
      description: 'Sets the button variant',
      required: false
    },
    {
      prop: 'size',
      default: 'md',
      type: 'PuikButtonSizes',
      details: `
enum PuikButtonSizes {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}
      `,
      description: 'Sets the button size',
      required: false
    },
    {
      prop: 'fluid',
      default: 'false',
      type: 'boolean',
      description: 'Sets the button as fluid',
      required: false
    },
    {
      prop: 'wrapLabel',
      default: 'false',
      type: 'boolean',
      description: 'Sets the carriage return of the button label',
      required: false
    },
    {
      prop: 'disabled',
      default: 'false',
      type: 'boolean',
      description: 'Sets the button as disabled',
      required: false
    },
    {
      prop: 'leftIcon',
      default: 'undefined',
      type: 'string',
      description: 'Sets the button left icon (from Material Symbols: https://fonts.google.com/icons)',
      required: false
    },
    {
      prop: 'rightIcon',
      default: 'undefined',
      type: 'string',
      description: 'Sets the button right icon (from Material Symbols: https://fonts.google.com/icons)',
      required: false
    },
    {
      prop: 'loading',
      default: 'false',
      type: 'boolean',
      description: 'Sets the loading state of the button',
      required: false
    },
    {
      prop: 'loaderPosition',
      default: 'right',
      type: 'buttonLoaderPositions',
      details: `
enum PuikButtonLoaderPositions {
  Left = 'left',
  Right = 'right'
}
      `,
      description: 'Sets the loading position of the button'
    },
    {
      prop: 'to',
      default: 'undefined',
      type: 'string',
      description: 'Sets a vue router link for the button (changes button to router-link)'
    },
    {
      prop: 'href',
      default: 'undefined',
      type: 'string',
      description: 'Sets a link for the button (changes button to "a" html tag)'
    },
    {
      prop: 'dataTest',
      type: 'string',
      default: 'undefined',
      description: 'Sets a data-test attribute to the button `${dataTest}` `left-icon-${dataTest}` `right-icon-${dataTest}`'
    },
    {
      prop: 'ariaLabel',
      default: 'undefined',
      type: 'string',
      description: 'Sets the aria-label attribute for accessibility'
    },
    {
      prop: 'disabledReason',
      default: 'undefined',
      type: 'string',
      description: 'Sets the aria-describedby attribute for accessibility if disabled'
    }
  ];
</script>

# Button

A `button` is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

## Overview

::: raw
<ComponentOverview>
  <Button />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <puik-button
    :size="size"
    :variant="variant"
    :fluid="fluid"
    :wrap-label="wrapLabel"
    :disabled="disabled"
    :left-icon="leftIcon"
    :right-icon="rightIcon"
    :loader="loader"
    :loader-position="loaderPosition"
    :to="to"
    :href="href"
    :data-test="dataTest"
    :aria-label="ariaLabel"
    :disabled-reason="disabledReason"
  >
    {{ label }}
  </puik-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const size = ref('md');
const variant = ref('primary');
const fluid = ref(false);
const wrapLabel = ref(true);
const disabled = ref(false);
const leftIcon = ref('');
const rightIcon = ref('');
const loader = ref(false);
const loaderPosition = ref('right');
const to = ref('');
const href = ref('');
const dataTest = ref('');
const ariaLabel = ref('');
const disabledReason = ref('');
const label = ref('Button label');
</script>

```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
