import type PaginationMedium from './pagination-medium.vue';

export interface PaginationMediumProps {
  modelValue?: number
  disabled?: boolean
  totalItem: number
  maxPage: number
  label?: string
  dataTest?: string
}

export type PaginationInstance = InstanceType<typeof PaginationMedium>;
