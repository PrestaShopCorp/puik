import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type DateRangePicker from './date-range-picker.vue'

export const columnsVariants = [2, 3]

export const dateRangePickerProps = buildProps({
  modelValue: {
    required: true,
    type: Array,
  },
  disabled: Boolean,
  error: Boolean,
  printedFormat: {
    type: String,
    default: 'MM-DD-YYYY',
  },
  columns: {
    type: [Number, String],
    values: columnsVariants,
    default: 2,
  },
  soloCalendars: Boolean,
  rangeOptions: Boolean,
  autoApply: Boolean,
} as const)

export type DateRangePickerProps = ExtractPropTypes<typeof dateRangePickerProps>

export type DateRangePickerInstance = InstanceType<typeof DateRangePicker>

export const dateRangePickerEmits = ['update:modelValue']

export type DateRangePickerEmits = typeof dateRangePickerEmits
