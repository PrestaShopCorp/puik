---
title: Button
description : A button is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
---
<script setup>
  import Button from '@vitepress/components/Button.vue';
  import DataAttributes from '@vitepress/components/DataAttributes.vue';
  import ComponentOverview from '@vitepress/components/ComponentOverview.vue';

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
    }
  ];
</script>

## Button

A `button` is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

<ComponentOverview>
  <Button />
</ComponentOverview>

::: details Show Code

```vue

```

:::

### API Reference

::: raw
<DataAttributes :attributes="attributes" />
:::
