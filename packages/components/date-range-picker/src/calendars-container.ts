import { buildProps } from '@puik/utils'
import { columnsVariants } from './date-range-picker'
import type { ExtractPropTypes, PropType } from 'vue'
import type CalendarsContainer from './calendars-container.vue'
import type { DateRangeDateValue, DisableDates } from './date-range-picker'

export interface CalendarView {
  month: number
  year: number
}
export type CalendarsView = [CalendarView, CalendarView, CalendarView]
export type ChangeView = {
  sign: number
  index: number
  type: string
}

export const calendarsContainerProps = buildProps({
  modelValue: {
    required: true,
    type: Object as PropType<DateRangeDateValue>,
  },
  columns: {
    type: Number,
    values: columnsVariants,
    default: 2,
  },
  soloCalendars: {
    required: true,
    type: Boolean,
  },
  rangeOptions: {
    required: true,
    type: Boolean,
  },
  autoApply: {
    required: true,
    type: Boolean,
  },
  close: {
    required: true,
    type: Function,
  },
  disabledDates: {
    type: [Function, Array, Date, Object, undefined] as PropType<DisableDates>,
  },
} as const)

export type CalendarsContainerProps = ExtractPropTypes<
  typeof calendarsContainerProps
>

export type CalendarsContainerInstance = InstanceType<typeof CalendarsContainer>

export const calendarsContainerEmits = ['update:modelValue']

export type CalendarsContainerEmits = typeof calendarsContainerEmits
