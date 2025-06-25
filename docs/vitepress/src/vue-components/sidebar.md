---
description : A Sidebar is a navigation component that displays a vertical list of links or sections. It supports expansion, accordion behavior, and mobile-friendly features.
name: sidebar
outline: deep
---
<script setup>
  import Sidebar from '@vitepress/components/Sidebar.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const sidebar_attributes = [
    {
      prop: 'expanded',
      type: 'boolean',
      default: false,
      description: 'v-model of the expansion state'
    },
    {
      prop: 'openAccordion',
      type: 'string',
      default: 'undefined',
      description: 'v-model of the open accordion name'
    },
    {
      prop: 'mobile',
      type: 'boolean',
      default: false,
      description: 'Adds a backdrop for dismiss and hide the sidebar when collapsed (mobile usage), expansion is triggered by the v-model'
    }
  ];

  const sidebar_group_item_attributes = [
    {
      prop: 'title',
      type: 'string',
      default: 'title',
      description: 'Sets the item title'
    },
    {
      prop: 'name',
      type: 'string',
      default: 'undefined',
      description: 'Sets the name'
    },
    {
      prop: 'icon',
      type: 'string',
      default: 'home',
      description: 'Sets the icon (from Material Symbols: https://fonts.google.com/icons)'
    },
    {
      prop: 'active',
      type: 'boolean',
      default: false,
      description: 'Sets an active state'
    },
    {
      prop: 'default',
      type: 'string',
      description: 'Sets the default content slot'
    },
    {
      prop: 'dataTest',
      type: 'string',
      default: 'undefined',
      description: 'Sets the data-test attribute on the sidebar group item `sidebarAccordion-${dataTest}` `sidebarMenuButton-${dataTest}`'
    }
  ]

  const sidebar_title_attributes = [
    {
      prop: 'tag',
      type: 'string',
      default: 'h3',
      description: 'Sets the node type'
    },
    {
      prop: 'default',
      type: 'string',
      default: 'Title',
      description: 'Sets the default content slot'
    },
    {
      prop: 'dataTest',
      type: 'string',
      default: 'undefined',
      description: 'Sets the data-test attribute on the sidebar title `sidebarTitle-${dataTest}`'
    }
  ]

  const sidebar_item_attributes = [
    {
      prop: 'title',
      type: 'string',
      default: 'title',
      description: 'Sets the item title'
    },
    {
      prop: 'href',
      type: 'string',
      default: 'undefined',
      description: 'Sets the href of the item'
    },
    {
      prop: 'to',
      type: 'string',
      default: 'undefined',
      description: 'Sets the to destination of the item (router-link)'
    },
    {
      prop: 'icon',
      type: 'string',
      default: 'home',
      description: 'Set the icon (from Material Symbols: https://fonts.google.com/icons)'
    },
    {
      prop: 'active',
      type: 'boolean',
      default: false,
      description: 'Set an active state'
    },
    {
      prop: 'default',
      type: 'string',
      description: 'Sets the default content slot'
    },
    {
      prop: 'dataTest',
      type: 'string',
      default: 'undefined',
      description: 'Sets the data-test attribute on the item `menubuttonTitle-${dataTest}` `buttonTitle-${dataTest}` `title-${dataTest}`'
    }
  ]
</script>

# Sidebar

 A `Sidebar` is a navigation component that displays a vertical list of links or sections. It supports expansion, accordion behavior, and mobile-friendly features.

## Overview

::: raw
<ComponentOverview>
  <Sidebar />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <puik-sidebar>
    <puik-sidebar-item title="Home" icon="home" />
    <puik-sidebar-item title="Dashboard" icon="trending_up" />
    <puik-sidebar-title>Section title</puik-sidebar-title>
    <puik-sidebar-group-item
      title="Orders"
      icon="shopping_basket"
      name="group-1"
      active
    >
      <puik-sidebar-item title="Title 1" active />
      <puik-sidebar-item title="Title 2" />
      <puik-sidebar-item title="Title 3" />
    </puik-sidebar-group-item>
    <puik-sidebar-group-item title="Catalog" icon="store" name="group-2">
      <puik-sidebar-item title="Title 1" />
      <puik-sidebar-item title="Title 2" />
      <puik-sidebar-item title="Title 3" />
    </puik-sidebar-group-item>
    <puik-sidebar-group-item title="Customers" icon="people" name="group-3">
      <puik-sidebar-item title="Title 1" />
      <puik-sidebar-item title="Title 2" />
      <puik-sidebar-item title="Title 3" />
    </puik-sidebar-group-item>
    <puik-sidebar-item title="Settings" icon="settings" />
    <puik-sidebar-item
      title="New modules added customization"
      icon="extension"
    />
  </puik-sidebar>
</template>

```

:::

## API Reference

### Sidebar Props

::: raw
<DataAttributes :attributes="sidebar_attributes" />
:::

## Sidebar sub-components

### Sidebar-title

The `Sidebar-title` sub-component is used to display a section heading within the sidebar. It helps organize sidebar content into logical groups, improving navigation clarity.

#### Sidebar title Props

::: raw
<DataAttributes :attributes="sidebar_title_attributes" />
:::

---

### Sidebar-group-item

The `Sidebar-group-item` sub-component allows you to group multiple sidebar items under a collapsible section. This is useful for organizing related navigation links and supporting accordion behavior.

#### Sidebar group item Props

::: raw
<DataAttributes :attributes="sidebar_group_item_attributes" />
:::

---

### Sidebar-item

The `Sidebar-item` sub-component represents a single clickable entry in the sidebar. It can display an icon and a label, and can be used either as a direct navigation link or as part of a group.

#### Sidebar item Props

::: raw
<DataAttributes :attributes="sidebar_item_attributes" />
:::
