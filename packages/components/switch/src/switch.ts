import { buildProps } from '@prestashopcorp/puik-utils'
import type { ExtractPropTypes } from 'vue'
import type Switch from './switch.vue'

export const switchProps = buildProps({
  label: {
    type: String,
    required: false,
    default: undefined,
  },
  labelRight: {
    type: String,
    required: false,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  modelValue: {
    type: Boolean,
    required: false,
    default: false,
  },
  screenReaderText: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type SwitchProps = ExtractPropTypes<typeof switchProps>

export const switchEmits = ['update:modelValue']
export type SwitchEmits = typeof switchEmits

export type SwitchInstance = InstanceType<typeof Switch>
