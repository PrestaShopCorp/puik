import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Table from './table.vue'
import type { PuikTableSearchInputTypes } from '../src/table-search-input'

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
}
export interface PuikTableHeader {
  value: string
  text?: string
  size?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center' | 'right'
  width?: string
  sortable?: boolean
  preventExpand?: boolean
  searchable?: boolean
  searchSubmit?: boolean
  searchType?: `${PuikTableSearchInputTypes}`
}

export const tableProps = buildProps({
  headers: {
    type: Array as PropType<PuikTableHeader[]>,
    required: true,
  },
  items: {
    type: Array as PropType<any[]>,
    required: false,
    default: () => [],
  },
  expandable: {
    type: Boolean,
    required: false,
    default: false,
  },
  selectable: {
    type: Boolean,
    required: false,
    default: false,
  },
  selection: {
    type: Array as PropType<number[]>,
    required: false,
    default: () => [],
  },
  searchBar: {
    type: Boolean,
    required: false,
    default: false,
  },
  searchFromServer: {
    type: Boolean,
    required: false,
    default: false,
  },
  sortFromServer: {
    type: Boolean,
    required: false,
    default: false,
  },
  fullWidth: {
    type: Boolean,
    required: false,
    default: false,
  },
  stickyFirstCol: {
    type: Boolean,
    required: false,
    default: false,
  },
  stickyLastCol: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type TableProps = ExtractPropTypes<typeof tableProps>

export type TableInstance = InstanceType<typeof Table>
