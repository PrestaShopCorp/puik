import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type TableSearchInput from './table-search-input.vue'

export enum PuikTableSearchInputTypes {
  Text = 'text',
  Range = 'range',
}

export type inputRange = {
  min?: number
  max?: number
}

export type searchOption = {
  searchBy: string
  inputText?: string
  inputRange?: inputRange
}

export const tableSearchInputProps = buildProps({
  name: {
    type: String,
    required: false,
    default: '',
  },
  column: {
    type: String,
    required: false,
    default: '',
  },
  searchSubmit: {
    type: Boolean,
    required: false,
    default: false,
  },
  searchReset: {
    type: Boolean,
    required: false,
    default: false,
  },
  searchType: {
    type: String as PropType<PuikTableSearchInputTypes>,
    required: false,
    default: PuikTableSearchInputTypes.Text,
  },
} as const)

export type TableSearchInputProps = ExtractPropTypes<
  typeof tableSearchInputProps
>

export type TableSearchInputInstance = InstanceType<typeof TableSearchInput>
