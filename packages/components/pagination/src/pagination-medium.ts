import type PaginationMedium from './pagination-medium.vue';

export interface PaginationMediumProps {
  modelValue?: number
  id: string
  disabled?: boolean
  totalItem: number
  maxPage: number
  label?: string
  dataTest?: string
  displayResults?: boolean
}

export type PaginationInstance = InstanceType<typeof PaginationMedium>;
