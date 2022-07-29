import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type CalendarCell from './calendar-cell.vue'

export const calendarCellProps = buildProps({
  date: {
    required: true,
    type: Date,
  },
} as const)

export type CalendarCellProps = ExtractPropTypes<typeof calendarCellProps>

export type CalendarCellInstance = InstanceType<typeof CalendarCell>
