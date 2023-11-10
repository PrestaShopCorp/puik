import type PaginationSmall from './pagination-small.vue'

export interface PaginationSmallProps {
  modelValue?: number
  disabled?: boolean
  maxPage: number
  label?: string
}

export type PaginationInstance = InstanceType<typeof PaginationSmall>
