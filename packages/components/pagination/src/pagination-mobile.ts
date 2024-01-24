import type PaginationMobile from './pagination-mobile.vue';

export interface PaginationMobileProps {
  modelValue?: number
  disabled?: boolean
  maxPage: number
  label?: string
  dataTest?: string
}

export type PaginationInstance = InstanceType<typeof PaginationMobile>;
