import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Calendar from './calendar.vue'

import type { DateRangeDateValue, DisableDates } from './date-range-picker'
import type { CalendarView } from './calendars-container'

export const calendarProps = buildProps({
  pickedRange: {
    required: true,
    type: Object as PropType<DateRangeDateValue>,
  },
  soloCalendar: {
    required: true,
    type: Boolean,
  },
  view: {
    required: true,
    type: Object as PropType<CalendarView>,
  },
  index: {
    required: true,
    type: Number,
  },
  first: {
    required: true,
    type: Boolean,
  },
  last: {
    required: true,
    type: Boolean,
  },
  disabledDates: {
    type: [Function, Array, Date, Object, undefined] as PropType<DisableDates>,
  },
} as const)

export type CalendarDate = Date | undefined

export type WeekDates = CalendarDate[]

export type Calendar = WeekDates[]

export type CalendarProps = ExtractPropTypes<typeof calendarProps>

export type CalendarInstance = InstanceType<typeof Calendar>

export const calendarEmits = ['pick-date', 'change-view']

export type CalendarEmits = typeof calendarEmits
