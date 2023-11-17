import type PaginationLarge from './pagination-large.vue';

export interface PaginationLargeProps {
  page: number
  itemsPerPage: number
  itemsPerPageOptions: number[]
  disabled?: boolean
  totalItem: number
  maxPage: number
  itemCount?: number
  label?: string
}

export type PaginationInstance = InstanceType<typeof PaginationLarge>;
