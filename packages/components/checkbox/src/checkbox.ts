import { buildProps } from '@prestashopcorp/puik-utils'
import type { ExtractPropTypes } from 'vue'
import type Checkbox from './checkbox.vue'

export const checkboxProps = buildProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  label: {
    type: String,
    required: false,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>

export type CheckboxInstance = InstanceType<typeof Checkbox>
