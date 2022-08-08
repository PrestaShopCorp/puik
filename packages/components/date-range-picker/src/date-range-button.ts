import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type DateRangeInput from './date-range-button.vue'
import type { DateRangeDateValue } from './date-range-picker'

export const dateRangeInputProps = buildProps({
  dateRange: {
    required: true,
    type: Object as PropType<DateRangeDateValue>,
  },
  disabled: {
    required: true,
    type: Boolean,
  },
  error: {
    required: true,
    type: Boolean,
  },
  active: {
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
