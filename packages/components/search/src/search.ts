import { buildProps } from '@puik/utils'
import { useLocale } from '@puik/hooks'
import type { ExtractPropTypes } from 'vue'
import type Search from './search.vue'
const { t } = useLocale()

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
    default: t('puik.search.placeholder'),
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
    default: '',
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  rounded: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type SearchProps = ExtractPropTypes<typeof searchProps>

export const searchEmits = ['update:modelValue']
export type SearchEmits = typeof searchEmits

export type SearchInstance = InstanceType<typeof Search>
