<template>
  <div class="puik-table__container">
    <table class="puik-table" :class="{ 'puik-table--full-width': fullWidth }">
      <thead class="puik-table__head">
        <tr class="puik-table__head__row">
          <th
            v-if="selectable"
            :class="[
              'puik-table__head__row__item puik-table__head__row__item--selection',
              { 'puik-table__head__row__item--sticky': stickyFirstCol },
            ]"
          >
            <puik-checkbox
              :model-value="selectAll"
              :indeterminate="indeterminate"
              class="puik-table__head__row__item--selection__checkbox"
              @click="handleClickAll"
            >
              {{ selectAllLabel }}
            </puik-checkbox>
          </th>
          <th
            v-for="(header, index) in headers"
            :key="`headers${header.value}`"
            :class="[
              `puik-table__head__row__item puik-table__head__row__item--${
                header.align ?? 'left'
              }`,
              {
                [`puik-table__head__row__item--${header.size}`]:
                  header?.size && !header?.width,
              },
              { 'puik-table__head__row__item--sticky': isSticky(index) },
            ]"
            :style="{ minWidth: header.width, width: header.width }"
          >
            <slot
              :name="`header-${header.value}`"
              :header="header"
              :index="index"
            >
              {{ header.text }}
            </slot>
          </th>
        </tr>
      </thead>
      <tbody class="puik-table__body">
        <template v-for="(item, rowIndex) in items" :key="`row-${rowIndex}`">
          <tr class="puik-table__body__row">
            <td
              v-if="selectable"
              :class="[
                'puik-table__body__row__item puik-table__body__row__item--selection',
                { 'puik-table__body__row__item--sticky': stickyFirstCol },
              ]"
            >
              <puik-checkbox
                :model-value="getSelected(rowIndex)"
                class="puik-table__body__row__item--selection__checkbox"
                @click="handleClick(rowIndex)"
              >
                {{ getSelectLabel(rowIndex) }}
              </puik-checkbox>
            </td>

            <td
              v-for="(header, colIndex) in headers"
              :key="`col-${colIndex}`"
              :class="[
                `puik-table__body__row__item puik-table__body__row__item--${
                  header.align ?? 'left'
                }`,
                { 'puik-table__body__row__item--sticky': isSticky(colIndex) },
              ]"
            >
              <slot
                :name="`item-${header.value}`"
                :item="item"
                :index="rowIndex"
              >
                {{ item[header.value] }}
              </slot>
            </td>
          </tr>
          <slot :name="`puik-table__body__row__item`" :item="item">
            <tr>
              <td :colspan="headers.length" class="expanded-cell">
                {{ item }}
              </td>
            </tr>
          </slot>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useLocale } from '@puik/hooks'
import PuikCheckbox from '../../checkbox/src/checkbox.vue'
import { tableProps } from './table'
defineOptions({
  name: 'PuikTable',
})

const props = defineProps(tableProps)
const emit = defineEmits<{
  (e: 'select', index: number): void
  (e: 'select:all'): void
  (e: 'update:selection', value: number[]): void
}>()
const { t } = useLocale()
const checked = ref<number[]>(props.selection)
const expandedCell = ref(null)

const isSticky = (
  index: number,
  selectable: boolean = props.selectable
): boolean => {
  if (selectable) {
    return props.stickyLastCol && index === props.headers.length - 1
  } else {
    return (
      (props.stickyFirstCol && index === 0) ||
      (props.stickyLastCol && index === props.headers.length - 1)
    )
  }
}

// const expandCell = (rowIndex: number, cellIndex: number) => {
//   expandedCell.value = {
//     content: rows.value[rowIndex][cellIndex],
//     rowIndex,
//   }
// }

const selectAll = computed(() => {
  if (indeterminate.value) return false
  return checked.value.length === props.items.length
})

const indeterminate = computed(() => {
  return checked.value.length > 0 && checked.value.length < props.items.length
})

function handleClickAll() {
  if (indeterminate.value || !selectAll.value) {
    checked.value = props.items.map((...args) => args[1])
  } else {
    checked.value = []
  }

  emit('select:all')
  emit('update:selection', checked.value)
}

function handleClick(index: number) {
  if (getSelected(index)) {
    checked.value = checked.value.filter((value) => value !== index)
  } else {
    checked.value.push(index)
  }

  emit('select', index)
  emit('update:selection', checked.value)
}

function getSelected(index: number): boolean {
  return checked.value.some((value) => value === index)
}

const selectAllLabel = computed(() => {
  return t(
    `puik.table.${
      indeterminate.value || !selectAll.value
        ? 'selectAllLabel'
        : 'unselectAllLabel'
    }`
  )
})

function getSelectLabel(index: number): string {
  return t(`puik.table.${getSelected(index) ? 'unselectLabel' : 'selectLabel'}`)
}

watch(
  () => props.selection,
  () => {
    checked.value = props.selection
  }
)
</script>
