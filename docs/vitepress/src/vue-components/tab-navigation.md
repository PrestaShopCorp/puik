---
description: A TabNavigation component displays a set of tabs for switching between different views or content panels. It supports accessibility, keyboard navigation, and custom content.
name: tab-navigation
outline: deep
---

<script setup>
import TabNavigation from '@vitepress/components/TabNavigation.vue';
import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

const tab_navigation_attributes = [
  {
    prop: 'name',
    type: 'string',
    default: undefined,
    description: "Unique id for the tab navigation (must not start with a number)"
  },
  {
    prop: 'defaultPosition',
    type: 'number',
    default: 1,
    description: 'Default position of the selected tab (minimum: 1)'
  },
  {
    prop: 'ariaLabel',
    type: 'string',
    default: undefined,
    description: 'Value of aria-label attribute for accessibility'
  }
];

const tab_navigation_title_attributes = [
  {
    prop: 'position',
    type: 'number',
    required: true,
    description: 'Position of the tab (must be >= 1)'
  },
  {
    prop: 'disabled',
    type: 'boolean',
    default: false,
    control: 'boolean',
    description: 'Disable a navigation tab'
  }
];

const tab_navigation_panel_attributes = [
  {
    prop: 'position',
    type: 'number',
    required: true,
    description: 'Position of the panel (must be >= 1 and match a tab)'
  }
];

const tab_navigation_group_titles_attributes = [
  {
    prop: 'ariaLabel',
    type: 'string',
    default: undefined,
    description: 'Value of aria-label attribute for the group of titles'
  }
];
</script>

# TabNavigation

A `TabNavigation` component displays a set of tabs for switching between different views or content panels. It supports accessibility, keyboard navigation, and custom content.

## Overview

::: raw
<ComponentOverview>
  <TabNavigation />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <div class="flex items-center justify-center">
    <puik-tab-navigation name="demo-tabs" :default-position="1">
      <puik-tab-navigation-group-titles aria-label="Demo tab navigation">
        <puik-tab-navigation-title :position="1">
          <puik-icon icon="home" font-size="18px" color="black" node-type="span" />
          Home
        </puik-tab-navigation-title>
        <puik-tab-navigation-title :position="2" :disabled="true">
          Disabled
        </puik-tab-navigation-title>
        <puik-tab-navigation-title :position="3">
          Settings
        </puik-tab-navigation-title>
      </puik-tab-navigation-group-titles>
      <puik-tab-navigation-group-panels>
        <puik-tab-navigation-panel :position="1">
          <div>Welcome to the Home tab!</div>
        </puik-tab-navigation-panel>
        <puik-tab-navigation-panel :position="2">
          <div>This tab is disabled.</div>
        </puik-tab-navigation-panel>
        <puik-tab-navigation-panel :position="3">
          <div>Settings content here.</div>
        </puik-tab-navigation-panel>
      </puik-tab-navigation-group-panels>
    </puik-tab-navigation>
  </div>
</template>

<script setup lang="ts">
</script>


```

:::

## API Reference

### TabNavigation Props

::: raw
<DataAttributes :attributes="tab_navigation_attributes" />
:::

---

### TabNavigationTitle Props

::: raw
<DataAttributes :attributes="tab_navigation_title_attributes" />
:::

---

### TabNavigationPanel Props

::: raw
<DataAttributes :attributes="tab_navigation_panel_attributes" />
:::

---

### TabNavigationGroupTitles Props

::: raw
<DataAttributes :attributes="tab_navigation_group_titles_attributes" />
:::

---

### TabNavigationGroupPanels

This subcomponent has no props. Its role is to contain all the panels and to apply a CSS class to it.

---

## Example

```vue
<template>
  <puik-tab-navigation name="example-tabs" :default-position="1">
    <puik-tab-navigation-group-titles aria-label="Main navigation">
      <puik-tab-navigation-title :position="1">Tab 1</puik-tab-navigation-title>
      <puik-tab-navigation-title :position="2" :disabled="true">Tab 2 (disabled)</puik-tab-navigation-title>
      <puik-tab-navigation-title :position="3">Tab 3</puik-tab-navigation-title>
    </puik-tab-navigation-group-titles>
    <puik-tab-navigation-group-panels>
      <puik-tab-navigation-panel :position="1">Content 1</puik-tab-navigation-panel>
      <puik-tab-navigation-panel :position="2">Content 2</puik-tab-navigation-panel>
      <puik-tab-navigation-panel :position="3">Content 3</puik-tab-navigation-panel>
    </puik-tab-navigation-group-panels>
  </puik-tab-navigation>
</template>
```

---

## Events

- `@change-active-tab` — Triggered when the current tab is changed. Payload: `(position: number)`

---

## Accessibility

- Uses `role="tablist"`, `role="tab"`, and `role="tabpanel"` for screen readers.
- Supports keyboard navigation (arrow keys, Home/End, etc).
