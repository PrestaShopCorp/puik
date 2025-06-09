---
title: Table
description: Like an HTML table element, a WAI-ARIA table is a static tabular structure containing one or more rows that each contain one or more cells; it is not an interactive widget. Thus, its cells are not focusable or selectable. The grid pattern is used to make an interactive widget that has a tabular structure.
name: table
aria: https://www.w3.org/WAI/ARIA/apg/patterns/table
---

<script setup>
  import Table from '@vitepress/components/Table.vue';
</script>

## Table

Like an HTML table element, a WAI-ARIA table is a static tabular structure containing one or more rows that each contain one or more cells; it is not an interactive widget. Thus, its cells are not focusable or selectable. The grid pattern is used to make an interactive widget that has a tabular structure.

<Table />

::: details Show Code {open}

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
