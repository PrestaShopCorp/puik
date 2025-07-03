---
description :   A NotificationBar is a component used to display important messages or notifications to users. It supports multiple variants, can be made closable, and allows for custom messages with optional icons and links.
name: notification-bar
outline: deep
---
<script setup>
  import NotificationBar from '@vitepress/components/NotificationBar.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'teleport',
      type: 'NotificationBarTeleport',
      default: 'undefined',
            details: `
interface NotificationBarTeleport {
  to: string
  prepend?: boolean
}
      `,
      description: 'Allows the element to be teleported to a node outside of Vue'
    },
    {
      prop: 'variant',
      type: 'PuikNotificationBarVariants',
      default: 'blue',
      details: `
enum PuikNotificationBarVariants {
  Blue = 'blue',
  Purple = 'purple',
  Yellow = 'yellow',
  Green = 'green',
}
      `,
      description: 'Variant background'
    },
    {
      prop: 'closable',
      type: 'boolean',
      default: true,
      description: 'Allows you to make the notification bar closable.'
    },
    {
      prop: 'messages',
      type: 'PuikMessagesType',
      required: true,
      default: 'undefined',
      details: `
type PuikMessagesType = NotificationBarMessage[];

interface NotificationBarMessage {
  icon?: string
  text: string
  link?: NotificationLink
}

interface NotificationLink {
  url: string
  text: string
}
      `,
      description: 'Messages to display.'
    }
  ];
</script>

# NotificationBar

 A `NotificationBar` is a component used to display important messages or notifications to users. It supports multiple variants, can be made closable, and allows for custom messages with optional icons and links.

## Overview

::: raw
<ComponentOverview>
  <NotificationBar />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <puik-notification-bar
      :variant="variant"
      :closable="closable"
      :messages="messages"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const messages = ref([
  {
    icon: "sentiment_satisfied",
    text: "Promo : profitez de -20% sur tous nos produits !",
    link: {
      url: "#",
      text: "J'en profite",
    },
  },
  {
    text: 'This is another notification message.',
    type: 'success'
  },
]);

const variant = ref('blue');
const closable = ref(true);

</script>

```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
