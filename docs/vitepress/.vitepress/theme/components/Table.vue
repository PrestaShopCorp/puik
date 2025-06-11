<template>
  <div>
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
      <template #item-actions>
        <puik-button
          variant="text"
          right-icon="delete"
          aria-label="Delete item"
        ></puik-button>
      </template>
    </puik-table>
  </div>
</template>

<script setup lang="ts">
import type {  PuikTableHeader } from '@prestashopcorp/puik-components'
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

const selection = ref([]);
const items = generateData();
const expandable = ref(true);
const selectable = ref(true);
const searchBar = ref(true);
const sortFromServer = ref(true);
const fullWidth = ref(true);
const stickyFirstCol = ref(true);
const stickyLastCol = ref(true);
const searchFromServer = ref(true);

</script>
