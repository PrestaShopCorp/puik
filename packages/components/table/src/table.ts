import type Table from './table.vue';
import type { PuikTableSearchInputTypes, searchOption } from '../src/table-search-input';

export enum PuikTableHeaderSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

export enum PuikTableHeaderAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export enum PuikTableSortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum PuikTableSortIcon {
  Default = 'unfold_more',
  Asc = 'expand_more',
  Desc = 'expand_less',
}

export enum PuikTableScrollBarPosition {
  Left = 'left',
  Right = 'right',
  IsScrolling = 'isScrolling',
}

export type sortOption = {
  sortBy?: string
  sortOrder?: PuikTableSortOrder
};

export interface PuikTableHeader {
  value: string
  text?: string
  size?: `${PuikTableHeaderSize}`
  align?: `${PuikTableHeaderAlign}`
  width?: string
  sortable?: boolean
  preventExpand?: boolean
  searchable?: boolean
  searchSubmit?: boolean
  searchType?: `${PuikTableSearchInputTypes}`
}

export interface TableProps {
  headers: PuikTableHeader[]
  items?: any[]
  expandable?: boolean
  selectable?: boolean
  selection?: number[]
  searchBar?: boolean
  searchFromServer?: boolean
  sortFromServer?: boolean
  fullWidth?: boolean
  stickyFirstCol?: boolean
  stickyLastCol?: boolean
  dataTest?: string
}

export type TableEmits = {
  select: [index: number]
  'select:all': []
  'update:selection': [value: number[]]
  sortColumn: [column: sortOption]
  searchSubmit: [column: searchOption[]]
  searchResultsLocally: any[]
};

export type TableInstance = InstanceType<typeof Table>;
