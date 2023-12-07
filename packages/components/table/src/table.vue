<template>
  <div
    class="puik-table__container"
    @scroll="getScrollBarPosition"
  >
    <table
      class="puik-table"
      :class="{ 'puik-table--full-width': fullWidth }"
    >
      <thead class="puik-table__head">
        <tr class="puik-table__head__row">
          <th
            v-if="selectable || expandable"
            :class="[
              'puik-table__head__row__item',
              { 'puik-table__head__row__item--sticky': stickyFirstCol },
              {
                'puik-table__head__row__item--sticky-scroll':
                  stickyFirstCol &&
                  (ScrollBarPosition === 'isScrolling' ||
                    ScrollBarPosition === 'right'),
              },
              { 'puik-table__head__row__item--selection': selectable },
              { 'puik-table__head__row__item--expandable': expandable },
            ]"
          >
            <puik-checkbox
              v-if="selectable"
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
              {
                'puik-table__head__row__item--sticky-scroll':
                  isSticky(index) && ScrollBarPosition === 'isScrolling',
              },
              {
                'puik-table__head__row__item--sticky-left':
                  isSticky(index) && ScrollBarPosition === 'left',
              },
              {
                'puik-table__head__row__item--sticky-right':
                  isSticky(index) && ScrollBarPosition === 'right',
              },
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
        <template
          v-for="(item, rowIndex) in items"
          :key="`row-${rowIndex}`"
        >
          <tr class="puik-table__body__row">
            <td
              v-if="selectable || expandable"
              :class="[
                'puik-table__body__row__item puik-table__body__row__item--selection',
                {
                  'puik-table__body__row__item--sticky': stickyFirstCol,
                },
                {
                  'puik-table__body__row__item--sticky-scroll':
                    stickyFirstCol && ScrollBarPosition === 'isScrolling',
                },
                {
                  'puik-table__body__row__item--sticky-left':
                    stickyFirstCol && ScrollBarPosition === 'left',
                },
                {
                  'puik-table__body__row__item--sticky-right':
                    stickyFirstCol && ScrollBarPosition === 'right',
                },
              ]"
            >
              <div class="puik-table__body__row__item__container">
                <puik-checkbox
                  v-if="selectable"
                  :model-value="getSelected(rowIndex)"
                  class="puik-table__body__row__item--selection__checkbox"
                  @click="handleClick(rowIndex)"
                >
                  {{ getSelectLabel(rowIndex) }}
                </puik-checkbox>
                <PuikIcon
                  v-if="expandable"
                  :class="[
                    { 'puik-icon__expand': expandedRows.includes(rowIndex) },
                  ]"
                  icon="keyboard_arrow_down"
                  font-size="24"
                  @click="expandRow(rowIndex)"
                />
              </div>
            </td>

            <td
              v-for="(header, colIndex) in headers"
              :key="`col-${colIndex}`"
              :class="[
                `puik-table__body__row__item puik-table__body__row__item--${
                  header.align ?? 'left'
                }`,
                { 'puik-table__body__row__item--sticky': isSticky(colIndex) },
                {
                  'puik-table__body__row__item--sticky-scroll':
                    isSticky(colIndex) && ScrollBarPosition == 'isScrolling',
                },
                {
                  'puik-table__body__row__item--sticky-left':
                    isSticky(colIndex) && ScrollBarPosition == 'left',
                },
                {
                  'puik-table__body__row__item--sticky-right':
                    isSticky(colIndex) && ScrollBarPosition == 'right',
                },
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
          <tr
            v-if="expandedRows.includes(rowIndex)"
            :key="`expanded-row-${rowIndex}`"
            class="puik-table__body__row--expanded"
          >
            <td
              :colspan="headers.length"
              class="puik-table__body__row__item--expanded"
            >
              <slot
                :name="`expanded-row-${rowIndex}`"
                :item="item"
                :index="rowIndex"
              >
                {{ item }}
              </slot>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useLocale } from '@prestashopcorp/puik-locale';
import PuikCheckbox from '../../checkbox/src/checkbox.vue';
import PuikIcon from '../../icon/src/icon.vue';
import { type TableProps } from './table';
defineOptions({
  name: 'PuikTable'
});

const props = withDefaults(defineProps<TableProps>(), {
  items: () => [],
  selection: () => []
});
const emit: any = defineEmits<{
  select: [index: number]
  'select:all': []
  'update:selection': [value: number[]]
}>();
const { t } = useLocale();
const checked = ref<number[]>(props.selection);
const expandedRows = ref<number[]>([]);
const ScrollBarPosition = ref<string>('left');

const getScrollBarPosition = async (event: Event) => {
  const target = event.target as HTMLElement;
  if (target.scrollLeft === 0) {
    ScrollBarPosition.value = 'left';
  } else if (
    Math.abs(target.scrollLeft + target.offsetWidth - target.scrollWidth) < 10
  ) {
    ScrollBarPosition.value = 'right';
  } else {
    ScrollBarPosition.value = 'isScrolling';
  }
};

const isSticky = (
  index: number,
  selectable: boolean = props.selectable,
  expandable: boolean = props.expandable
): boolean => {
  if (selectable || expandable) {
    return props.stickyLastCol && index === props.headers.length - 1;
  } else {
    return (
      (props.stickyFirstCol && index === 0) ||
      (props.stickyLastCol && index === props.headers.length - 1)
    );
  }
};

const expandRow = (rowIndex: number) => {
  const position = expandedRows.value.indexOf(rowIndex);
  if (position !== -1) {
    expandedRows.value.splice(position, 1);
  } else {
    expandedRows.value.push(rowIndex);
  }
};

const indeterminate = computed(() => {
  return checked.value.length > 0 && checked.value.length < props.items.length;
});

const selectAll = computed(() => {
  if (indeterminate.value) return false;
  return checked.value.length === props.items.length;
});

function handleClickAll() {
  if (indeterminate.value || !selectAll.value) {
    checked.value = props.items.map((...args) => args[1]);
  } else {
    checked.value = [];
  }

  emit('select:all');
  emit('update:selection', checked.value);
}

function getSelected(index: number): boolean {
  return checked.value.some((value) => value === index);
}

function handleClick(index: number) {
  if (getSelected(index)) {
    checked.value = checked.value.filter((value) => value !== index);
  } else {
    checked.value.push(index);
  }

  emit('select', index);
  emit('update:selection', checked.value);
}

const selectAllLabel = computed(() => {
  return t(
    `puik.table.${
      indeterminate.value || !selectAll.value
        ? 'selectAllLabel'
        : 'unselectAllLabel'
    }`
  );
});

function getSelectLabel(index: number): string {
  return t(`puik.table.${getSelected(index) ? 'unselectLabel' : 'selectLabel'}`);
}

watch(
  () => props.selection,
  () => {
    checked.value = props.selection;
  }
);
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-table.scss';
</style>
