import { buildProps } from '@prestashopcorp/puik-utils'
import type { ExtractPropTypes } from 'vue'
import type Radio from './radio.vue'

export const radioProps = buildProps({
  label: {
    type: String,
    required: false,
    default: undefined,
  },
  name: {
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
    type: [Boolean, String, Number],
    required: false,
    default: false,
  },
  value: {
    type: [Boolean, String, Number],
    required: false,
    default: false,
  },
} as const)

export type RadioProps = ExtractPropTypes<typeof radioProps>

export type RadioInstance = InstanceType<typeof Radio>
export const radioEmits = ['update:modelValue']
export type RadioEmits = typeof radioEmits
