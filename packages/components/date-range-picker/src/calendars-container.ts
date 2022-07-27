import { buildProps } from '@puik/utils'
import { columnsVariants } from './date-range-picker'
import type { ExtractPropTypes } from 'vue'
import type CalendarsContainer from './calendars-container.vue'

export const calendarsContainerProps = buildProps({
  modelValue: {
    required: true,
    type: Array,
  },
  columns: {
    type: [Number, String],
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
} as const)

export type CalendarsContainerProps = ExtractPropTypes<
  typeof calendarsContainerProps
>

export type CalendarsContainerInstance = InstanceType<typeof CalendarsContainer>

export const calendarsContainerEmits = ['update:modelValue']

export type CalendarsContainerEmits = typeof calendarsContainerEmits
