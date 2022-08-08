import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type DateRangePicker from './date-range-picker.vue'

export const columnsVariants = [2, 3, '2', '3']

export type DateRangeDateValue = {
  startDate?: Date
  endDate?: Date
}

type DateRangeISOValue = {
  startDate?: string
  endDate?: string
}

export type DisabledDatesFunction = (date: Date) => boolean

export type DisableDates =
  | DisabledDatesFunction
  | Date[]
  | Date
  | DateRangeDateValue
  | undefined

export const dateRangePickerProps = buildProps({
  modelValue: {
    required: true,
    type: Object as PropType<DateRangeISOValue>,
  },
  disabled: Boolean,
  error: Boolean,
  printedFormat: {
    type: String,
    default: 'MM-dd-yyyy',
  },
  columns: {
    type: [Number, String],
    values: columnsVariants,
    default: 2,
  },
  soloCalendars: Boolean,
  rangeOptions: Boolean,
  autoApply: Boolean,
  disabledDates: {
    type: [Function, Array, Date, Object, undefined] as PropType<DisableDates>,
  },
} as const)

export type DateRangePickerProps = ExtractPropTypes<typeof dateRangePickerProps>

export type DateRangePickerInstance = InstanceType<typeof DateRangePicker>

export const dateRangePickerEmits = ['update:modelValue']

export type DateRangePickerEmits = typeof dateRangePickerEmits
