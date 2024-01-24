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
                  (scrollBarPosition === 'isScrolling' ||
                    scrollBarPosition === 'right'),
              },
              { 'puik-table__head__row__item--selection': selectable },
              { 'puik-table__head__row__item--expandable': expandable },
            ]"
          >
            <puik-checkbox
              v-if="selectable && !searchBar"
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
              {
                'puik-table__head__row__item--sortable': header?.sortable,
              },
              { 'puik-table__head__row__item--sticky': isSticky(index) },
              {
                'puik-table__head__row__item--sticky-scroll':
                  isSticky(index) && scrollBarPosition === 'isScrolling',
              },
              {
                'puik-table__head__row__item--sticky-left':
                  isSticky(index) && scrollBarPosition === 'left',
              },
              {
                'puik-table__head__row__item--sticky-right':
                  isSticky(index) && scrollBarPosition === 'right',
              },
            ]"
            :style="{ minWidth: header.width, width: header.width }"
          >
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>
                  <slot
                    :name="`header-${header.value}`"
                    :header="header"
                    :index="index"
                  >
                    {{ header?.text || header?.value }}
                  </slot>
                </span>
                <PuikButton
                  v-if="header.sortable"
                  :right-icon="
                    sortIcon[header.value] ?? PuikTableSortIcon.Default
                  "
                  variant="primary-reverse"
                  size="sm"
                  @click="sortTable(header.value)"
                />
              </div>
            </div>
          </th>
        </tr>
        <tr
          v-if="searchBar"
          class="puik-table__head__row puik-table__search__bar"
        >
          <th
            v-if="selectable || expandable"
            :class="[
              'puik-table__head__row__item',
              { 'puik-table__head__row__item--sticky': stickyFirstCol },
              {
                'puik-table__head__row__item--sticky-scroll':
                  stickyFirstCol &&
                  (scrollBarPosition ===
                    'isScrolling' ||
                    scrollBarPosition === 'right'),
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
            :key="`headers-${header.value}`"
            :class="[
              `puik-table__head__row__item puik-table__head__row__item--${
                header.align ?? 'left'
              }`,
              {
                [`puik-table__head__row__item--${header.size}`]:
                  header?.size && !header?.width,
              },
              {
                'puik-table__head__row__item--sortable': header?.sortable,
              },
              { 'puik-table__head__row__item--sticky': isSticky(index) },
              {
                'puik-table__head__row__item--sticky-scroll':
                  isSticky(index) &&
                  scrollBarPosition === 'isScrolling',
              },
              {
                'puik-table__head__row__item--sticky-left':
                  isSticky(index) &&
                  scrollBarPosition === 'left',
              },
              {
                'puik-table__head__row__item--sticky-right':
                  isSticky(index) &&
                  scrollBarPosition === 'right',
              },
            ]"
            :style="{ minWidth: header.width, width: header.width }"
          >
            <template v-if="header.searchable || header.searchSubmit">
              <div class="puik-table__head__row__item__container">
                <PuikTableSearchInput
                  :key="`search-${header.value}-${searchInputKey}`"
                  :name="`search-${header.value}`"
                  :column="header.value"
                  :search-submit="header.searchSubmit"
                  :search-reset="searchReset"
                  :search-type="(header.searchType as PuikTableSearchInputTypes)"
                  @search-text-value="handleSearch"
                  @search-range-value="handleSearch"
                  @search-submit-event="handleSearchSubmit"
                  @search-reset-event="handleSearchReset"
                  @keyup.enter="handleSearchSubmit"
                />
              </div>
            </template>
          </th>
        </tr>
      </thead>
      <tbody class="puik-table__body">
        <template v-if="searchLoading">
          <tr
            v-for="(_item, rowIndex) in props.items"
            :key="`row-${rowIndex}`"
          >
            <td
              v-for="(_header, colIndex) in headers"
              :key="colIndex"
              class="puik-table__body__row__item--loading"
            >
              <puik-skeleton-loader variant="jumbotron" />
            </td>
          </tr>
        </template>
        <template v-if="!searchLoading">
          <template
            v-for="(item, rowIndex) in data"
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
                      stickyFirstCol && scrollBarPosition === 'isScrolling',
                  },
                  {
                    'puik-table__body__row__item--sticky-left':
                      stickyFirstCol && scrollBarPosition === 'left',
                  },
                  {
                    'puik-table__body__row__item--sticky-right':
                      stickyFirstCol && scrollBarPosition === 'right',
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
                  {
                    'puik-table__body__row__item--expand-row':
                      expandable && !header?.preventExpand,
                  },
                  { 'puik-table__body__row__item--sticky': isSticky(colIndex) },
                  {
                    'puik-table__body__row__item--sticky-scroll':
                      isSticky(colIndex) &&
                      scrollBarPosition === 'isScrolling',
                  },
                  {
                    'puik-table__body__row__item--sticky-left':
                      isSticky(colIndex) &&
                      scrollBarPosition === 'left',
                  },
                  {
                    'puik-table__body__row__item--sticky-right':
                      isSticky(colIndex) &&
                      scrollBarPosition === 'right',
                  },
                ]"
                @click="
                  expandable && !header?.preventExpand
                    ? expandRow(rowIndex)
                    : ''
                "
              >
                <div class="puik-table__body__row__item__container">
                  <div class="puik-table__body__row__item__content">
                    <slot
                      :name="`item-${header.value}`"
                      :item="item"
                      :index="rowIndex"
                    >
                      {{ item[header.value] }}
                    </slot>
                  </div>
                </div>
              </td>
            </tr>
            <tr
              v-if="expandedRows.includes(rowIndex)"
              :key="`expanded-row-${rowIndex}`"
              class="puik-table__body__row--expanded"
            >
              <td
                v-if="stickyFirstCol"
                :class="[
                  'puik-table__body__row__item puik-table__body__row__item--selection',
                  { 'puik-table__body__row__item--sticky': stickyFirstCol },
                  {
                    'puik-table__body__row__item--sticky-scroll':
                      stickyFirstCol &&
                      scrollBarPosition === 'isScrolling',
                  },
                  {
                    'puik-table__body__row__item--sticky-left':
                      stickyFirstCol &&
                      scrollBarPosition === 'left',
                  },
                  {
                    'puik-table__body__row__item--sticky-right':
                      stickyFirstCol && scrollBarPosition === 'right',
                  },
                ]"
              />
              <td
                :colspan="
                  stickyFirstCol && stickyLastCol
                    ? headers.length - 1
                    : headers.length
                "
                class="puik-table__body__row__item puik-table__body__row__item--expanded"
              >
                <slot
                  name="expanded-row"
                  :item="item"
                  :index="rowIndex"
                >
                  {{ item }}
                </slot>
              </td>
              <td
                v-if="stickyLastCol"
                :class="[
                  'puik-table__body__row__item puik-table__body__row__item--selection',
                  { 'puik-table__body__row__item--sticky': stickyLastCol },
                  {
                    'puik-table__body__row__item--sticky-scroll':
                      stickyLastCol &&
                      scrollBarPosition === 'isScrolling',
                  },
                  {
                    'puik-table__body__row__item--sticky-left':
                      stickyLastCol &&
                      scrollBarPosition === 'left',
                  },
                  {
                    'puik-table__body__row__item--sticky-right':
                      stickyLastCol &&
                      scrollBarPosition === 'right',
                  },
                ]"
              />
            </tr>
          </template>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, toRaw } from 'vue';
import { useLocale } from '@prestashopcorp/puik-locale';
import { PuikCheckbox } from '@prestashopcorp/puik-components/checkbox';
import { PuikButton } from '@prestashopcorp/puik-components/button';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import { PuikSkeletonLoader } from '@prestashopcorp/puik-components/skeleton-loader';
import { PuikTableSearchInput } from '@prestashopcorp/puik-components/table';
import {
  TableProps,
  PuikTableSortOrder,
  PuikTableSortIcon,
  sortOption
} from './table';
import type {
  PuikTableSearchInputTypes,
  searchOption
} from './table-search-input';

defineOptions({
  name: 'PuikTable'
});

const props = withDefaults(defineProps<TableProps>(), {
  items: () => [],
  selection: () => []
});

const emit = defineEmits<{
  select: [index: number]
  'select:all': []
  'update:selection': [value: number[]]
  sortColumn: [column: sortOption]
  searchSubmit: [column: searchOption[]]
}>();

const { t } = useLocale();
const checked = ref<number[]>(props.selection);
const expandedRows = ref<number[]>([]);
const scrollBarPosition = ref<string>('left');
const lastScrollLeft = ref(0);
const sortOrder = ref<Record<string, PuikTableSortOrder>>({});
const sortIcon = ref<Record<string, PuikTableSortIcon>>({});
const data = ref([...props.items]);
const currentSortCol = ref('');
const globalSearchOptions = ref<searchOption[]>([]);
const searchReset = ref(false);
const searchLoading = ref(false);
const searchInputKey = ref(0);

const handleSearch = (payload: searchOption) => {
  const foundIndex = globalSearchOptions.value.findIndex(
    (option) => option.searchBy === payload.searchBy
  );
  if (foundIndex !== -1) {
    globalSearchOptions.value.splice(foundIndex, 1);
  }
  if (payload.inputText?.length === 0) {
    return;
  }
  globalSearchOptions.value.push(payload);
};

const forceRenderInputSearch = () => {
  searchInputKey.value += 1;
};

const handleSearchReset = () => {
  searchLoading.value = true;
  globalSearchOptions.value = [];
  data.value = props.items;
  searchReset.value = false;
  forceRenderInputSearch();
  searchLoading.value = false;
};

const handleSearchDataLocally = () => {
  searchLoading.value = true;
  const searchedRows = props.items.filter((row) => {
    return globalSearchOptions.value.every((searchOption) => {
      if (
        row[searchOption.searchBy] &&
        searchOption.inputText !== undefined &&
        searchOption.inputText !== ''
      ) {
        return row[searchOption.searchBy]
          .toString()
          .toLowerCase()
          .trim()
          .includes(searchOption?.inputText?.toLowerCase().trim());
      }
      if (
        row[searchOption.searchBy] &&
        searchOption?.inputRange?.min !== undefined &&
        searchOption?.inputRange?.max !== undefined
      ) {
        return (
          searchOption.inputRange.min <= row[searchOption.searchBy] &&
          searchOption.inputRange.max >= row[searchOption.searchBy]
        );
      }
      return true;
    });
  });
  searchLoading.value = false;
  data.value = searchedRows;
};

const handleSearchSubmit = () => {
  searchReset.value = true;
  if (!props.searchFromServer) {
    handleSearchDataLocally();
  }
  emit('searchSubmit', toRaw(globalSearchOptions.value));
};

const resetSortIcons = () => {
  for (const col in sortIcon.value) {
    sortIcon.value[col] = PuikTableSortIcon.Default;
  }
};

const setSortOrderAndIcon = (headerCol: string) => {
  if (sortOrder.value[headerCol]) {
    sortOrder.value[headerCol] =
      sortOrder.value[headerCol] === PuikTableSortOrder.Asc &&
      currentSortCol.value === headerCol
        ? PuikTableSortOrder.Desc
        : PuikTableSortOrder.Asc;
    sortIcon.value[headerCol] =
      sortOrder.value[headerCol] === PuikTableSortOrder.Asc
        ? PuikTableSortIcon.Asc
        : PuikTableSortIcon.Desc;
  } else {
    sortOrder.value[headerCol] = PuikTableSortOrder.Asc;
    sortIcon.value[headerCol] = PuikTableSortIcon.Asc;
  }
};

const sortDataLocally = (headerCol: string) => {
  const order = sortOrder.value[headerCol] === PuikTableSortOrder.Asc ? 1 : -1;
  data.value.sort((a, b) => {
    const aValue =
      typeof a[headerCol] === 'string'
        ? a[headerCol].toLowerCase()
        : a[headerCol];
    const bValue =
      typeof b[headerCol] === 'string'
        ? b[headerCol].toLowerCase()
        : b[headerCol];
    return order * (aValue < bValue ? -1 : aValue > bValue ? 1 : 0);
  });
};

const sortTable = (headerCol: string) => {
  if (!props.sortFromServer) {
    sortDataLocally(headerCol);
  }
  resetSortIcons();
  setSortOrderAndIcon(headerCol);

  const options = {
    sortBy: headerCol,
    sortOrder: sortOrder.value[headerCol]
  } as sortOption;
  emit('sortColumn', options);
  currentSortCol.value = headerCol;
  return data.value;
};

const getScrollBarPosition = async (event: Event) => {
  const target = event.target as HTMLElement;
  if (target.scrollLeft === 0) {
    scrollBarPosition.value = 'left';
  } else if (
    Math.abs(target.scrollLeft + target.offsetWidth - target.scrollWidth) < 20
  ) {
    scrollBarPosition.value = 'right';
  } else {
    scrollBarPosition.value = 'isScrolling';
  }

  lastScrollLeft.value = target.scrollLeft;
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

const handleClickAll = () => {
  if (indeterminate.value || !selectAll.value) {
    checked.value = props.items.map((...args) => args[1]);
  } else {
    checked.value = [];
  }

  emit('select:all');
  emit('update:selection', checked.value);
};

const getSelected = (index: number): boolean => {
  return checked.value.some((value) => value === index);
};

const handleClick = (index: number) => {
  if (getSelected(index)) {
    checked.value = checked.value.filter((value) => value !== index);
  } else {
    checked.value.push(index);
  }

  emit('select', index);
  emit('update:selection', checked.value);
};

const selectAllLabel = computed(() => {
  return t(
    `puik.table.${
      indeterminate.value || !selectAll.value
        ? 'selectAllLabel'
        : 'unselectAllLabel'
    }`
  );
});

const getSelectLabel = (index: number): string => {
  return t(`puik.table.${getSelected(index) ? 'unselectLabel' : 'selectLabel'}`);
};

watch(
  () => props.selection,
  () => {
    checked.value = props.selection;
  }
);

watch(
  () => props.items,
  (newItems) => {
    data.value = [...newItems];
  }
);
</script>
