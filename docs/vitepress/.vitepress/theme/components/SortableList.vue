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
