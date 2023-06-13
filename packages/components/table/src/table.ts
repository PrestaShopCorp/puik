import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Table from './table.vue'

export const puikTableColSizes = ['sm', 'md', 'lg']

export interface PuikTableHeader {
  value: string
  text?: string
  size?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center' | 'right'
  width?: string
}

export const tablePropsValues = {
  headers: {
    type: Array as PropType<PuikTableHeader[]>,
    required: true,
  },
  items: {
    type: Array as PropType<any[]>,
    required: false,
    default: () => [],
  },
  selectable: {
    type: Boolean,
    required: false,
    default: false,
  },
  selection: {
    type: Array as PropType<number[]>,
    required: false,
    default: () => [],
  },
  fullWidth: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const
export const tableProps = buildProps(tablePropsValues)

export type TableProps = ExtractPropTypes<typeof tableProps>

export const tableEmits = ['click', 'click:all', 'update:selection']
export type TableEmits = typeof tableEmits

export type TableInstance = InstanceType<typeof Table>
