import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Select from './select.vue'

export interface Option {
  label?: string
  value: string | number
}

export const selectProps = buildProps({
  modelValue: {
    type: [String, Number, Object] as PropType<
      string | number | Record<string, any>
    >,
    required: true,
  },
  displayProperty: {
    type: String,
    required: false,
    default: 'label',
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  error: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type SelectProps = ExtractPropTypes<typeof selectProps>

export const selectEmits = ['update:modelValue']
export type SelectEmits = typeof selectEmits

export type SelectInstance = InstanceType<typeof Select>
