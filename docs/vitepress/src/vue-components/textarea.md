---
description: A Textarea component allows users to enter multi-line text. It supports auto-grow, character count, error state, accessibility, and more.
name: textarea
outline: deep
---

<script setup>
import Textarea from '@vitepress/components/Textarea.vue';
import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

const textarea_attributes = [
  {
    prop: 'modelValue',
    type: 'string',
    default: '',
    description: 'v-model for textarea value'
  },
  {
    prop: 'id',
    type: 'string',
    default: undefined,
    description: 'Sets the textarea id'
  },
  {
    prop: 'name',
    type: 'string',
    default: '',
    description: 'Sets the textarea name'
  },
  {
    prop: 'placeholder',
    type: 'string',
    default: '',
    description: 'Sets the placeholder'
  },
  {
    prop: 'ariaLabel',
    type: 'string',
    default: undefined,
    description: 'Sets the aria-label attribute for accessibility'
  },
  {
    prop: 'autofocus',
    type: 'boolean',
    default: false,
    description: 'Sets the autofocus attribute'
  },
  {
    prop: 'disabled',
    type: 'boolean',
    default: false,
    description: 'Sets the textarea as disabled'
  },
  {
    prop: 'readonly',
    type: 'boolean',
    default: false,
    description: 'Sets the textarea as readonly'
  },
  {
    prop: 'required',
    type: 'boolean',
    default: false,
    description: 'Sets the textarea as required'
  },
  {
    prop: 'hideHint',
    type: 'boolean',
    default: false,
    description: 'Hide the hint slot'
  },
  {
    prop: 'autoGrow',
    type: 'boolean',
    default: true,
    description: 'Sets the textarea height as the text increases to maxRows'
  },
  {
    prop: 'maxLength',
    type: 'number',
    default: undefined,
    description: 'Sets the max number of characters'
  },
  {
    prop: 'rows',
    type: 'number',
    default: 2,
    description: 'Sets the default height'
  },
  {
    prop: 'maxRows',
    type: 'number',
    default: 2,
    description: 'Sets the maximum height'
  },
  {
    prop: 'error',
    type: 'string',
    default: undefined,
    description: 'Set an error message'
  }
];
</script>

# Textarea

A `Textarea` component allows users to enter multi-line text. It supports auto-grow, character count, error state, accessibility, and more.

## Overview

::: raw
<ComponentOverview>
  <Textarea />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <div class="flex flex-col gap-6 w-full">
    <puik-textarea
      id="textarea-1"
      v-model="value"
      placeholder="Default textarea"
      data-test="textarea-default"
    />
    <puik-textarea
      id="textarea-2"
      v-model="value"
      placeholder="Disabled textarea"
      :disabled="true"
      data-test="textarea-disabled"
    />
    <puik-textarea
      id="textarea-3"
      v-model="value"
      placeholder="Readonly textarea"
      :readonly="true"
      data-test="textarea-readonly"
    />
    <puik-textarea
      id="textarea-4"
      v-model="value"
      placeholder="With error"
      error="This is an error message"
      data-test="textarea-error"
    />
    <puik-textarea
      id="textarea-5"
      v-model="value"
      placeholder="With character count"
      :max-length="50"
      data-test="textarea-charcount"
    />
    <puik-textarea
      id="textarea-6"
      v-model="value"
      placeholder="Auto-grow textarea"
      :auto-grow="true"
      :rows="2"
      :max-rows="6"
      data-test="textarea-autogrow"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

```

:::

## Props

::: raw
<DataAttributes :attributes="textarea_attributes" />
:::

## Accessibility

- Uses semantic HTML `<textarea>`.
- Supports `aria-label` and standard accessibility attributes.

## Examples

```vue

<!-- Default -->
<puik-textarea id="textarea-1" v-model="value" />

<!-- With placeholder -->
<puik-textarea id="textarea-2" v-model="value" placeholder="Type here..." />

<!-- Disabled -->
<puik-textarea id="textarea-3" v-model="value" :disabled="true" />

<!-- Readonly -->
<puik-textarea id="textarea-4" v-model="value" :readonly="true" />

<!-- With error -->
<puik-textarea id="textarea-5" v-model="value" error="This is an error message" />

<!-- With character count -->
<puik-textarea id="textarea-6" v-model="value" :max-length="50" />

<!-- Auto-grow -->
<puik-textarea id="textarea-7" v-model="value" :auto-grow="true" :rows="2" :max-rows="6" />

```
