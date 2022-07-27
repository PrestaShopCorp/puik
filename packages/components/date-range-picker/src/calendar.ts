import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Calendar from './calendar.vue'

export const calendarProps = buildProps({
  modelValue: {
    required: true,
    type: Array,
  },
  soloCalendars: {
    required: true,
    type: Boolean,
  },
  autoApply: {
    required: true,
    type: Boolean,
  },
} as const)

export type CalendarProps = ExtractPropTypes<typeof calendarProps>

export type CalendarInstance = InstanceType<typeof Calendar>

export const calendarEmits = ['update:modelValue']

export type CalendarEmits = typeof calendarEmits
