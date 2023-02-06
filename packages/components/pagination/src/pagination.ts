import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Pagination from './pagination.vue'

export enum PaginationVariantEnum {
  loader = 'loader',
  mobile = 'mobile',
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export const paginationVariants = Object.values(
  PaginationVariantEnum
) as string[]

export const paginationProps = buildProps({
  modelValue: {
    type: Number,
    required: false,
    default: 1,
  },
  variant: {
    type: String as PropType<PaginationVariantEnum>,
    required: false,
    values: paginationVariants,
    default: PaginationVariantEnum.medium,
  },
  totalItem: {
    type: Number,
    required: true,
  },
  maxPage: {
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
} as const)

export type PaginationProps = ExtractPropTypes<typeof paginationProps>

export type PaginationInstance = InstanceType<typeof Pagination>
