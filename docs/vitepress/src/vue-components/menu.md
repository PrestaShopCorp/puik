---
description : A Menu is a floating panel that displays a list of actions or options. It can be positioned above or below its trigger element and aligned to the left or right. Menus are commonly used for navigation, context actions, or to group related commands in a compact, accessible way.
name: menu
aria: https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/
outline: deep
---
<script setup>
  import Menu from '@vitepress/components/Menu.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const menu_attributes = [
    {
      prop: 'position',
      default: 'bottom',
      type: 'PuikMenuPositions',
      details: `
enum PuikMenuPositions {
  Top = 'top',
  Bottom = 'bottom',
}
      `,
      description: 'Menu position'
    },
    {
      prop: 'align',
      default: 'left',
      type: 'PuikMenuAligns',
      details: `
enum PuikMenuAligns {
  Left = 'left',
  Right = 'right',
}
      `,
      description: 'Menu alignment'
    },
    {
      prop: 'maxHeight',
      default: 'none',
      type: 'string',
      control: 'text',
      description: 'Menu max height'
    },
    {
      prop: 'width',
      default: '200px',
      type: 'string',
      description: 'Menu width'
    },
    {
      prop: 'trigger',
      type: 'SlotProps',
      description: 'Trigger used to show or hide menu'
    }
  ];

    const menu_title_attributes = [
      {
        prop: 'dataTest',
        default: 'undefined',
        type: 'string',
        description: 'Sets the data-test attribute for title `title-${dataTest}'
      }
    ]
</script>

# Menu

A `Menu` is a floating panel that displays a list of actions or options. It can be positioned above or below its trigger element and aligned to the left or right. Menus are commonly used for navigation, context actions, or to group related commands in a compact, accessible way.

## Overview

::: raw
<ComponentOverview>
  <Menu />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <puik-menu
    :align="align"
    :position="position"
    :width="width"
    :max-height="maxHeight"
  >
    <template #trigger>
      <puik-button>Show menu</puik-button>
    </template>

    <template #default="{ close }">
      <puik-menu-item-title>
        First section title
      </puik-menu-item-title>
      <puik-menu-item>
        <puik-button variant="text">
          Item
        </puik-button>
      </puik-menu-item>
      <puik-menu-item>
        <puik-button variant="text" left-icon="home">
          Item with icon
        </puik-button>
      </puik-menu-item>

      <puik-menu-item-separator />

      <puik-menu-item-title>
        Second section title
      </puik-menu-item-title>
      <p>
        Information text
      </p>
      <puik-menu-item>
        <puik-button variant="destructive" left-icon="delete" @click="close">
          Destructive item
        </puik-button>
      </puik-menu-item>
    </template>
  </puik-menu>
</template>

<script lang="ts">
import { ref } from 'vue';

const align = ref('left');
const position = ref('bottom');
const width = ref('200px');
const maxHeight = ref('300px');
</script>

```

:::

## API Reference

### Menu props

::: raw
<DataAttributes :attributes="menu_attributes" />
:::

## Menu sub-components

### Menu-item-title

#### Menu title Props

::: raw
<DataAttributes :attributes="menu_title_attributes" />
:::

::: details Show Code {open}

```vue{18}

<template>
  <puik-menu
    :align="align"
    :position="position"
    :width="width"
    :max-height="maxHeight"
  >
    <template #trigger>
      <puik-button>Show menu</puik-button>
    </template>

    <template #default="{ close }">
      <!--
        Defines the title for a Puik menu item.
        This property specifies the display text shown for the menu item in the Puik UI component.
      -->
      <puik-menu-item-title>
        First section title
      </puik-menu-item-title>
      <puik-menu-item>
        <puik-button variant="text">
          Item
        </puik-button>
      </puik-menu-item>
      <puik-menu-item>
        <puik-button variant="text" left-icon="home">
          Item with icon
        </puik-button>
      </puik-menu-item>

      <puik-menu-item-separator />

      <puik-menu-item-title>
        Second section title
      </puik-menu-item-title>
      <p>
        Information text
      </p>
      <puik-menu-item>
        <puik-button variant="destructive" left-icon="delete" @click="close">
          Destructive item
        </puik-button>
      </puik-menu-item>
    </template>
  </puik-menu>
</template>


```

:::

### Menu-item

::: details Show Code {open}

```vue{20}

<template>
  <puik-menu
    :align="align"
    :position="position"
    :width="width"
    :max-height="maxHeight"
  >
    <template #trigger>
      <puik-button>Show menu</puik-button>
    </template>

    <template #default="{ close }">
      <puik-menu-item-title>
        First section title
      </puik-menu-item-title>
      <!--
        Puik menu item, representing an individual option within a menu component.
      -->
      <puik-menu-item>
        <puik-button variant="text">
          Item
        </puik-button>
      </puik-menu-item>
      <puik-menu-item>
        <puik-button variant="text" left-icon="home">
          Item with icon
        </puik-button>
      </puik-menu-item>

      <puik-menu-item-separator />

      <puik-menu-item-title>
        Second section title
      </puik-menu-item-title>
      <p>
        Information text
      </p>
      <puik-menu-item>
        <puik-button variant="destructive" left-icon="delete" @click="close">
          Destructive item
        </puik-button>
      </puik-menu-item>
    </template>
  </puik-menu>
</template>


```

:::

### Menu-item-separator

::: details Show Code {open}

```vue{32}

<template>
  <puik-menu
    :align="align"
    :position="position"
    :width="width"
    :max-height="maxHeight"
  >
    <template #trigger>
      <puik-button>Show menu</puik-button>
    </template>

    <template #default="{ close }">
      <puik-menu-item-title>
        First section title
      </puik-menu-item-title>
      <puik-menu-item>
        <puik-button variant="text">
          Item
        </puik-button>
      </puik-menu-item>
      <puik-menu-item>
        <puik-button variant="text" left-icon="home">
          Item with icon
        </puik-button>
      </puik-menu-item>

      <!--
        The <puik-menu-item-separator /> is used to visually separate items within a menu,
        improving readability and organization of grouped menu options.
      -->
      <puik-menu-item-separator />

      <puik-menu-item-title>
        Second section title
      </puik-menu-item-title>
      <p>
        Information text
      </p>
      <puik-menu-item>
        <puik-button variant="destructive" left-icon="delete" @click="close">
          Destructive item
        </puik-button>
      </puik-menu-item>
    </template>
  </puik-menu>
</template>


```

:::
