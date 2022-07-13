import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Search from './search.vue'

export const searchProps = buildProps({
  modelValue: {
    type: [String, Number],
    required: false,
    default: '',
  },
  id: {
    type: String,
    required: false,
    default: undefined,
  },
  placeholder: {
    type: String,
    required: false,
    default: 'Search',
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  name: {
    type: String,
    required: false,
    default: undefined,
  },
  autocomplete: {
    type: String,
    required: false,
    default: 'couou',
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  isMainFeature: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type SearchProps = ExtractPropTypes<typeof searchProps>

export const searchEmits = ['update:modelValue']
export type SearchEmits = typeof searchEmits

export type SearchInstance = InstanceType<typeof Search>
