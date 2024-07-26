import '@prestashopcorp/puik-components/table/style/css';
import type Table from './table.vue';
import type { PuikTableSearchInputTypes } from '../src/table-search-input';

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
}

export type TableInstance = InstanceType<typeof Table>;
