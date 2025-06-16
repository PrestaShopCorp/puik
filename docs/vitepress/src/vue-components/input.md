---
description : An Input represents any user interface component that gives the user permission to enter or input a text.
name: input
outline: deep
---
<script setup>
  import Input from '@vitepress/components/Input.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'type',
      default: 'text',
      type: 'PuikInputTypes',
      details: `
enum PuikInputTypes {
  Text = 'text',
  Password = 'password',
  Email = 'email',
  Number = 'number',
  Search = 'search',
  Url = 'url',
  Phone = 'tel',
}
      `,
      description: 'Sets the type of the input'
    },
    {
      prop: 'id',
      default: 'undefined',
      type: 'string',
      description: 'Sets the id of the input'
    },
    {
      prop: 'srLabel',
      default: 'undefined',
      type: 'string',
      description: 'Sets the input label for screen readers'
    },
    {
      prop: 'placeholder',
      type: 'string',
      description: 'Sets the placeholder of the input'
    },
    {
      prop: 'disabled',
      default: false,
      type: 'boolean',
      description: 'Sets the input as disabled'
    },
    {
      prop: 'name',
      default: 'undefined',
      type: 'string',
      description: 'Sets the name of the input'
    },
    {
      prop: 'autocomplete',
      default: 'undefined',
      type: 'string',
      description: 'Sets the autocomplete mode of the input'
    },
    {
      prop: 'required',
      default: false,
      type: 'boolean',
      description: 'Sets the input as required'
    },
    {
      prop: 'error',
      default: 'undefined',
      type: 'string',
      description: 'Sets an error for the input'
    },
    {
      prop: 'success',
      default: false,
      type: 'boolean',
      description: 'Sets the input in a success state'
    },
    {
      prop: 'hideHint',
      default: false,
      type: 'boolean',
      description: 'Hides the input hint'
    },
    {
      prop: 'step',
      default: 1,
      type: 'number',
      description: 'Sets the incremental step (for number input only)'
    },
    {
      prop: 'precision',
      default: 'undefined',
      type: 'number',
      description: 'Sets the precision of the input value (for number input only)'
    },
    {
      prop: 'min',
      default: '-infinity',
      type: 'number',
      description: 'Sets the min value of the input (for number input only)'
    },
    {
      prop: 'max',
      default: '+infinity',
      type: 'number',
      description: 'Sets the max value of the input (for number input only)'
    },
    {
      prop: 'minLength',
      default: 'undefined',
      type: 'number',
      description: 'Sets the min number of characters'
    },
    {
      prop: 'maxLength',
      default: 'undefined',
      type: 'number',
      description: 'Sets the max number of characters'
    },
    {
      prop: 'prepend',
      default: 'undefined',
      type: 'string',
      description: 'Prepend an icon or text to the input (see Material Symbols: https://fonts.google.com/icons)'
    },
    {
      prop: 'append',
      default: 'undefined',
      type: 'string',
      control: 'none',
      description: 'Append an icon or text to the input (see Material Symbols: https://fonts.google.com/icons)'
    },
    {
      prop: 'dataTest',
      type: 'string',
      control: 'text',
      description: 'Sets the data-test attribute on the input and error text elements `input-${dataTest}` `error-${dataTest}`'
    },
    {
      prop: 'ariaLabel',
      type: 'string',
      default: 'undefined',
      description: 'Sets the aria-label attribute for accessibility'
    },
    {
      prop: 'ariaLive',
      type: 'PuikAriaLive',
      details: `
enum PuikAriaLive {
  Polite = 'polite',
  Assertive = 'assertive',
  Off = 'off'
}
      `,
      default: 'polite',
      description: 'Option for "aria-live" attribute'
    }
  ];
</script>

# Input

An `Input` represents any user interface component that gives the user permission to enter or input a text.

## Overview

::: raw
<ComponentOverview>
  <Input />
</ComponentOverview>
:::

::: details Show Code

```vue



```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
