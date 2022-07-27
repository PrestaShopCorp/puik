import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type DateRangeInput from './date-range-input.vue'

export const dateRangeInputProps = buildProps({
  modelValue: {
    required: true,
    type: Array,
  },
  disabled: {
    required: true,
    type: Boolean,
  },
  error: {
    required: true,
    type: Boolean,
  },
  printedFormat: {
    required: true,
    type: String,
  },
} as const)

export type DateRangeInputProps = ExtractPropTypes<typeof dateRangeInputProps>

export type DateRangeInputInstance = InstanceType<typeof DateRangeInput>

export const dateRangeInputEmits = ['update:modelValue']

export type DateRangeInputEmits = typeof dateRangeInputEmits
