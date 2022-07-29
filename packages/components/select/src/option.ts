import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Option from './option.vue'

export interface DefaultOption {
  label?: string
  value: string | number
}

export type Option = string | number | Record<string, any> | DefaultOption

export const optionProps = buildProps({
  value: {
    type: [String, Number, Object] as PropType<Option>,
    required: true,
  },
  label: {
    type: [String, Number],
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type OptionProps = ExtractPropTypes<typeof optionProps>

export type OptionInstance = InstanceType<typeof Option>
