<template>
  <table class="puik-table">
    <thead class="puik-table__headers">
      <tr class="puik-table__headers_header">
        <th v-if="selectable" class="puik-table__headers__item__selection">
          <puik-checkbox
            :model-value="checkedAll"
            :indeterminate="indeterminate"
            @click="handleClickAll"
          ></puik-checkbox>
        </th>
        <th
          v-for="header in headers"
          :key="`headers${header.value}`"
          class="puik-table__headers__item"
        >
          <slot :name="`header-${header.value}`" :header="header">
            {{ header.text ?? header.value }}
          </slot>
        </th>
      </tr>
    </thead>
    <tbody class="puik-table__rows">
      <tr
        v-for="(item, rowIndex) in items"
        :key="`row-${rowIndex}`"
        class="puik-table__row"
      >
        <td v-if="selectable" class="puik-table__row__col__selection">
          <puik-checkbox
            :model-value="getChecked(rowIndex)"
            @click="handleClick(rowIndex)"
          ></puik-checkbox>
        </td>
        <td
          v-for="(header, colIndex) in headers"
          :key="`col-${colIndex}`"
          class="puik-table__row__col"
        >
          <slot :name="`item-${header.value}`" :item="item">
            {{ item[header.value] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import PuikCheckbox from '../../checkbox/src/checkbox.vue'
import { tableProps, tableEmits } from './table'
defineOptions({
  name: 'PuikTable',
})

const props = defineProps(tableProps)
const emit = defineEmits(tableEmits)
const checked = ref<number[]>(props.selection)

const checkedAll = computed(() => {
  if (indeterminate.value) return false
  return checked.value.length === props.items.length
})

const indeterminate = computed(() => {
  return checked.value.length > 0 && checked.value.length < props.items.length
})

function handleClickAll() {
  if (indeterminate.value || !checkedAll.value) {
    checked.value = props.items.map((...args) => args[1])
  } else {
    checked.value = []
  }

  emit('click:all')
  emit('update:selection', checked.value)
}

function getChecked(index: number): boolean {
  return checked.value.some((value) => value === index)
}

function handleClick(index: number) {
  if (checked.value.some((value) => value === index)) {
    checked.value = checked.value.filter((value) => value !== index)
  } else {
    checked.value.push(index)
  }

  emit('click', index)
  emit('update:selection', checked.value)
}

watch(
  () => props.selection,
  () => {
    checked.value = props.selection
  }
)
</script>
