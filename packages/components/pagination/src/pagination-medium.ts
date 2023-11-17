import type PaginationMedium from './pagination-medium.vue';

export interface PaginationMediumProps {
  modelValue?: number
  disabled?: boolean
  totalItem: number
  maxPage: number
  itemCount?: number
  label?: string
}

export type PaginationInstance = InstanceType<typeof PaginationMedium>;
