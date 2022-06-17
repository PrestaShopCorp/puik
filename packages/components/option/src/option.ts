import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Option from './option.vue'

export const optionProps = buildProps({
  label: {
    type: String,
    required: false,
    default: undefined,
  },
  item: {
    type: Object,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
} as const)

export type OptionProps = ExtractPropTypes<typeof optionProps>

export type OptionInstance = InstanceType<typeof Option>
