import '../style';
import type Pagination from './pagination.vue';

export enum PuikPaginationVariants {
  Loader = 'loader',
  Mobile = 'mobile',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface PaginationProps {
  id?: string
  variant?: `${PuikPaginationVariants}`
  totalItem: number
  itemsPerPage?: number
  itemsPerPageOptions?: number[]
  displayItemsPerPage?: boolean
  displayResults?: boolean
  page: number
  label?: string
  loaderButtonLabel?: string
  dataTest?: string
}

export type PaginationInstance = InstanceType<typeof Pagination>;
