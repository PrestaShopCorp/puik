---
description: A SortableList component allows users to reorder a list of items via drag-and-drop or keyboard. It supports custom content, position numbers, and advanced options using SortableJS.
name: sortable-list
outline: deep
---

<script setup>
import SortableList from '@vitepress/components/SortableList.vue';
import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

const sortable_list_attributes = [
  {
    prop: 'listId',
    type: 'string',
    default: undefined,
    description: 'Identifier of the sortable list'
  },
  {
    prop: 'list',
    type: 'any[]',
    default: undefined,
    control: 'array',
    description: 'List of items to display and reorder'
  },
  {
    prop: 'itemKey',
    type: 'string | function',
    default: undefined,
    description: 'Key or function to uniquely identify each item'
  },
  {
    prop: 'displayPositionNumbers',
    type: 'boolean',
    default: true,
    description: 'Displays position numbers for each item'
  },
  {
    prop: 'iconPosition',
    type: 'PuikSortableListIconPosition',
    default: 'right',
    description: 'Position of the drag icon (left or right)'
  },
  {
    prop: 'tag',
    type: 'PuikSortableListTag',
    default: 'ul',
    description: 'HTML tag for the list container'
  },
  {
    prop: 'options',
    type: 'object',
    default: '{ animation: 150 }',
    description: 'Options for SortableJS (see https://github.com/SortableJS/Sortable#options)'
  },
  {
    prop: 'dataTest',
    type: 'string',
    default: undefined,
    description: 'Sets the data-test attribute on the sortable list'
  }
];
</script>

# SortableList

A `SortableList` component allows users to reorder a list of items via drag-and-drop or keyboard. It supports custom content, position numbers, and advanced options using SortableJS.

## Overview

::: raw
<ComponentOverview>
  <SortableList />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <puik-sortable-list
    :list-id="listId"
    :list="list"
    :item-key="itemKey"
    :display-position-numbers="displayPositionNumbers"
    :icon-position="iconPosition"
    :tag="tag"
    :options="options"
    :data-test="dataTest"
    @list-changed="onListChanged"
  >
    <template #custom-content="{ element }">
      <div>
        <strong>{{ element.title }}</strong>
        <span v-if="element.description"> - {{ element.description }}</span>
      </div>
    </template>
  </puik-sortable-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const listId = 'default-list'
const list = ref([
  {
    id: 1,
    title: 'list-1-item 1',
    description: 'description',
    imgSrc: 'https://t.ly/Ku50h',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    id: 2,
    title: 'list-1-item 2',
    description: 'description',
    imgSrc: 'https://t.ly/hkQSL',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    id: 3,
    title: 'list-1-item 3',
    description: 'description',
    imgSrc: 'https://t.ly/MeB5s',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    id: 4,
    title: 'list-1-item 4',
    description: 'description',
    imgSrc: 'https://t.ly/UfeAc',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  }
]);

const itemKey = 'id'
const displayPositionNumbers = true
const iconPosition = 'right'
const tag = 'ul'
const options = { animation: 150 }
const dataTest = 'sortable-list'

function onListChanged(newList: any[]) {
  list.value = newList
}
</script>

```

:::

## Props

::: raw
<DataAttributes :attributes="sortable_list_attributes" />
:::

## Events

- `@list-changed` — Emits the new list after a reorder.
- All native SortableJS events are also emitted (see [SortableJS docs](https://github.com/SortableJS/Sortable#events)).

## Custom Content

You can use the `#custom-content` slot to render custom content for each item.

```vue

<SortableList
  :list-id="'custom-list'"
  :list="customList"
  item-key="id"
>
  <template #custom-content="{ element, index }">
    <div>
      <strong>{{ element.customKey }}</strong>
      <span>{{ element.anotherKey }}</span>
    </div>
  </template>
</SortableList>

```
