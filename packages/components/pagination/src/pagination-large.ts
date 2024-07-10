import type PaginationLarge from './pagination-large.vue';

export interface PaginationLargeProps {
  page: number
  itemsPerPage: number
  itemsPerPageOptions: number[]
  disabled?: boolean
  totalItem: number
  maxPage: number
  label?: string
  dataTest?: string
  displayItemsPerPage?: boolean
  displayResults?: boolean
}

export type PaginationInstance = InstanceType<typeof PaginationLarge>;
