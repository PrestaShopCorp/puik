import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Pagination from './pagination.vue'

export enum PuikPaginationVariantEnum {
  loader = 'loader',
  mobile = 'mobile',
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export const puikPaginationVariants = Object.values(
  PuikPaginationVariantEnum
) as string[]

export const puikPaginationItemsPerPageOptions = [5, 10, 15]

export const paginationProps = buildProps({
  variant: {
    type: String,
    required: false,
    values: puikPaginationVariants,
    default: PuikPaginationVariantEnum.medium,
  },
  totalItem: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    required: false,
    default: puikPaginationItemsPerPageOptions[0],
  },
  itemsPerPageOptions: {
    type: Array as PropType<number[]>,
    required: false,
    default: () => puikPaginationItemsPerPageOptions,
  },
  page: {
    type: Number,
    required: true,
  },
  itemCount: {
    type: Number,
    required: false,
    default: 0,
  },
  label: {
    type: String,
    required: false,
    default: undefined,
  },
  loaderButtonLabel: {
    type: String,
    required: false,
    default: undefined,
  },
  loaderButtonDisabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  labelDataTest: {
    type: String,
    required: false,
    default: undefined,
  },
  previousButtonDataTest: {
    type: String,
    required: false,
    default: undefined,
  },
  nextButtonDataTest: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type PaginationProps = ExtractPropTypes<typeof paginationProps>

export type PaginationInstance = InstanceType<typeof Pagination>
