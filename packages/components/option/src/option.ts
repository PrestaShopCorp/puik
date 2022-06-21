import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Option from './option.vue'

export const optionProps = buildProps({
  active: {
    type: Boolean,
    required: false,
    default: false,
  },
  selected: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type OptionProps = ExtractPropTypes<typeof optionProps>

export type OptionInstance = InstanceType<typeof Option>
