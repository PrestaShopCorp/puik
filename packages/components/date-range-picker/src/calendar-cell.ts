import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type CalendarCell from './calendar-cell.vue'

export const calendarCellProps = buildProps({
  disabled: {
    required: true,
    type: Boolean,
  },
  active: {
    required: true,
    type: Boolean,
  },
  start: {
    required: true,
    type: Boolean,
  },
  end: {
    required: true,
    type: Boolean,
  },
} as const)

export type CalendarCellProps = ExtractPropTypes<typeof calendarCellProps>

export type CalendarCellInstance = InstanceType<typeof CalendarCell>
