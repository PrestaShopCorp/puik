---
description: An Avatar is an image element with a fallback for representing the user.
name: avatar
outline: deep
---
<script setup>
  import Avatar from '@vitepress/components/Avatar.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'id',
      default: 'undefined',
      type: 'string',
      description: 'Prop which will correspond to the component\'s html id attribute. NB: must not start with a number',
      required: false
    },
    {
      prop: 'mode',
      default: 'primary',
      type: 'PuikAvatarMode',
      details: `
export enum PuikAvatarMode {
  Primary = 'primary',
  Reverse = 'reverse',
}
      `,
      description: 'Two possible variations (primary and reverse) : depending on a dark or light background of the container where the avatar is placed',
      required: false
    },
    {
      prop: 'size',
      default: 'medium',
      type: 'PuikAvatarSize',
      details: `
enum PuikAvatarSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Jumbo = 'jumbo',
}
      `,
      description: 'Size variants of avatar component (small, medium, large, jumbo)',
      required: false
    },
    {
      prop: 'type',
      default: 'initials',
      type: 'PuikAvatarType',
      details: `
enum PuikAvatarType {
  Photo = 'photo',
  Icon = 'icon',
  Initials = 'initials',
}
      `,
      description: 'Content type of avatar (initials, image or icon)',
      required: false
    },
    {
      prop: 'icon',
      default: 'undefined',
      type: 'string',
      description: 'Sets the icon name (from Material Symbols: https://fonts.google.com/icons)',
      required: false
    },
    {
      prop: 'src',
      default: 'undefined',
      type: 'string',
      description: 'Image source if avatar type is set to "photo"',
      required: false
    },
    {
      prop: 'alt',
      default: 'undefined',
      type: 'string',
      description: 'Image alt attribute if avatar type prop is set to "photo"',
      required: false
    },
    {
      prop: 'ariaLabel',
      default: 'undefined',
      type: 'string',
      description: 'Sets the aria-label attribute for accessibility',
      required: false
    },
    {
      prop: 'firstName',
      default: '\'\'',
      type: 'string',
      description: 'If avatar type prop is set to "initials". The "initials" type is composed of two letters max (first letter of firstName prop corresponds to the first). NB: if the lastName prop is missing then the initials will be the first two letters of the firstName prop in the case where the singleInitial prop is false. Special characters are removed',
      required: false
    },
    {
      prop: 'lastName',
      default: '\'\'',
      type: 'string',
      description: 'If avatar type prop is set to "initials". The "initials" type is composed of two letters max (first letter of lastName corresponds to the last). NB : if the firstName prop is missing then the initials will be the first two letters of the lastName prop in the case where the singleInitial prop is false. Special characters are removed.',
      required: false
    },
    {
      prop: 'singleInitial',
      default: 'undefined',
      type: 'boolean',
      description: 'Initials match a single letter (first letter of firstName. If the firstName conditions are not met this is the first letter of lastName). NB: if the conditions for the firstName and lastName props are not met then the default value is "P" (singleInitial set to true) or "PS" (singleInitial set to false)',
      required: false
    },
    {
      prop: 'dataTest',
      default: 'undefined',
      type: 'string',
      description: 'Sets the data-test attribute for the avatar `image-${dataTest}` `icon-${dataTest}` `initials-${dataTest}`',
      required: false
    }
  ];
</script>

# Avatar

An `Avatar` is an image element with a fallback for representing the user.

## Overview

::: raw
<ComponentOverview>
  <Avatar />
</ComponentOverview>
:::

::: details Show Code

```vue
<template>
  <div class="flex gap-x-4">
    <PuikAvatar
      id="avatar-initials"
      :size="size"
      type="initials"
      :mode="mode"
      :firstName="firstName"
      :lastName="lastName"
    />
    <PuikAvatar
      id="avatar-photo"
      :size="size"
      type="photo"
      :mode="mode"
      :src="src"
      :alt="alt"
    />
    <PuikAvatar
      id="avatar-icon"
      :size="size"
      type="icon"
      :icon="icon"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {  PuikAvatarMode,  PuikAvatarSize, PuikAvatarType } from '@prestashopcorp/puik-components';

const size = ref(PuikAvatarSize.Large);
const type = ref(PuikAvatarType.Initials);
const mode = ref(PuikAvatarMode.Primary);
const src = ref('https://picsum.photos/id/823/200');
const alt = ref('puik-avatar-alt');
const icon = ref('home');
const firstName = ref('Presta');
const lastName = ref('Shop');
</script>
```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
