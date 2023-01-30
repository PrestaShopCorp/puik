import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Pagination from './pagination.vue'

export enum PaginationVariantEnum {
  mobile = 'mobile',
  small = 'small',
  medium = 'medium',
  large = 'large',
}

const paginationVariants = Object.values(PaginationVariantEnum) as string[]

const itemsPerPage = [5, 10, 15]

export interface PaginationModel {
  page: number
  itemPerPage: number
}

export const paginationProps = buildProps({
  modelValue: {
    type: Object as PropType<PaginationModel>,
    required: false,
    default: () => ({ page: 1, itemPerPage: itemsPerPage[0] }),
  },
  variant: {
    type: String as PropType<PaginationVariantEnum>,
    required: false,
    values: paginationVariants,
    default: PaginationVariantEnum.medium,
  },
  maxPage: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Array as PropType<number[]>,
    required: false,
    default: () => itemsPerPage,
  },
  totalItem: {
    type: Number,
    required: true,
  },
} as const)

export const paginationEmits = ['update:modelValue']

export type PaginationProps = ExtractPropTypes<typeof paginationProps>

export type PaginationInstance = InstanceType<typeof Pagination>
