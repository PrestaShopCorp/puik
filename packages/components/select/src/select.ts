import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Select from './select.vue'
import type { Option } from './option'

export const selectProps = buildProps({
  modelValue: {
    type: [String, Number, Object] as PropType<Option>,
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
