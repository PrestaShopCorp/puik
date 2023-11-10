import type Pagination from './pagination.vue'

export enum PuikPaginationVariants {
  Loader = 'loader',
  Mobile = 'mobile',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface PaginationProps {
  variant?: `${PuikPaginationVariants}`
  totalItem: number
  itemsPerPage?: number
  itemsPerPageOptions?: number[]
  page: number
  itemCount?: number
  label?: string
  loaderButtonLabel?: string
  loaderButtonDisabled?: boolean
}

export type PaginationInstance = InstanceType<typeof Pagination>
