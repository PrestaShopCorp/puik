---
description: Like an HTML table element, a WAI-ARIA table is a static tabular structure containing one or more rows that each contain one or more cells; it is not an interactive widget. Thus, its cells are not focusable or selectable. The grid pattern is used to make an interactive widget that has a tabular structure.
name: table
aria: https://www.w3.org/WAI/ARIA/apg/patterns/table
outline: deep
---

<script setup lang="ts">
  import { ref } from 'vue';
  import Table from '@vitepress/components/Table.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'headers',
      default: '[]',
      type: 'PuikTableHeader[]',
      details: `
export interface PuikTableHeader {
  value: string
  text?: string
  size?: PuikTableHeaderSize
  align?: PuikTableHeaderAlign
  width?: string
  sortable?: boolean
  preventExpand?: boolean
  searchable?: boolean
  searchSubmit?: boolean
  searchType?: PuikTableSearchInputTypes
}`,
      description: 'Table headers'
    },
    {
      prop: 'items',
      default: '[]',
      type: 'any[]',
      description: 'Table items'
    },
    {
      prop: 'expandable',
      default: true,
      type: 'boolean',
      description: 'Makes rows expandable'
    },
    {
      prop: 'selectable',
      default: false,
      type: 'boolean',
      description: 'Makes rows selectable'
    },
    {
      prop: 'searchBar',
      default: false,
      type: 'boolean',
      description: 'Display the search bar'
    },
    {
      prop: 'searchFromServer',
      default: false,
      type: 'boolean',
      description: 'No client-side search handling (however the searchSubmit event is always emitted with a gloabaSearchOptions payload with useful informations to create a query)'
    },
    {
      prop: 'sortFromServer',
      default: true,
      type: 'boolean',
      description: 'No client-side sort handling (however the sortColumn event is always emitted with a sortOption type payload with useful informations to create a query)'
    },
    {
      prop: 'fullWidth',
      default: true,
      type: 'boolean',
      description: 'Sets the table width at 100%'
    },
    {
      prop: 'stickyFirstCol',
      default: true,
      type: 'boolean',
      description: 'Makes the first column sticky'
    },
    {
      prop: 'stickyLastCol',
      default: false,
      type: 'boolean',
      description: 'Makes the last column sticky'
    },
    {
      prop: 'dataTest',
      default: 'undefined',
      type: 'string',
      description: 'Sets the data-test attribute to target elements and facilitate end-to-end testing'
    }
  ];
</script>

# Table

A `table` is a static tabular structure containing one or more rows that each contain one or more cells; it is not an interactive widget. Thus, its cells are not focusable or selectable. The grid pattern is used to make an interactive widget that has a tabular structure.

## Overview

:::raw
<ComponentOverview>
  <Table />
</ComponentOverview>
:::

::: details Show Code

```vue
<template>
  <puik-table
    v-model:selection="selection"
    :headers="headers"
    :items="items"
    :expandable="expandable"
    :selectable="selectable"
    :searchBar="searchBar"
    :searchFromServer="searchFromServer"
    :sortFromServer="sortFromServer"
    :fullWidth="fullWidth"
    :stickyFirstCol="stickyFirstCol"
    :stickyLastCol="stickyLastCol"
  >
    <template #item-actions="{ item }">
      <puik-button
        variant="text"
        right-icon="delete"
        aria-label="Delete item"
      ></puik-button>
    </template>
  </puik-table>
</template>

<script setup lang="ts">
import type { PuikTableHeader } from '@prestashopcorp/puik-components'
import { ref } from 'vue';

function generateData(length = 3) {
  return Array(length)
    .fill(null)
    .map((_, index) => {
      const firstname = `firstname${index}`;
      const lastname = `lastname${index}`;
      const email = `${lastname}.${firstname}@email.com`.toLowerCase();

      return {
        firstname,
        lastname,
        email,
        age: 40
      };
    });
}

const headers: PuikTableHeader[] = [
  {
    text: 'Nom',
    value: 'lastname',
    size: 'md',
    searchable: true,
  },
  {
    text: 'Prénom',
    value: 'firstname',
    size: 'md',
    searchable: true,
  },
  {
    text: 'Age',
    value: 'age',
    size: 'sm',
    align: 'right',
    searchable: true,
  },
  {
    text: 'Email',
    value: 'email',
    align: 'left',
    searchable: true,
  },
  {
    value: 'actions',
    size: 'sm',
    align: 'center',
    preventExpand: true,
    searchSubmit: true,
  },
]
</script>
```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
