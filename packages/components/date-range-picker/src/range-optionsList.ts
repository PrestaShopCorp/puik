import {
  startOfToday,
  startOfYesterday,
  subDays,
  subMonths,
  startOfMonth,
  endOfMonth,
  subYears,
  startOfYear,
  endOfYear,
  startOfWeek,
  endOfWeek,
  startOfQuarter,
  endOfQuarter,
} from 'date-fns'
import { useLocale } from '@puik/hooks'

const { t } = useLocale()

export type RangeOption = {
  startDate: Date
  endDate: Date
  label: string
}

interface RangeOptionsList {
  [index: string]: RangeOption
}

export const today: Date = startOfToday()
const yesterday: Date = startOfYesterday()
const previousMonth: Date = subMonths(today, 1)
const previousYear: Date = subYears(today, 1)

export default <RangeOptionsList>{
  today: {
    startDate: today,
    endDate: today,
    label: t('puik.dates.today'),
  },
  yesterday: {
    startDate: yesterday,
    endDate: yesterday,
    label: t('puik.dates.yesterday'),
  },
  last7Days: {
    startDate: subDays(today, 6),
    endDate: today,
    label: t('puik.dates.last7Days'),
  },
  last30Days: {
    startDate: subDays(today, 29),
    endDate: today,
    label: t('puik.dates.last30Days'),
  },
  last90Days: {
    startDate: subDays(today, 89),
    endDate: today,
    label: t('puik.dates.last90Days'),
  },
  lastMonth: {
    startDate: startOfMonth(previousMonth),
    endDate: endOfMonth(previousMonth),
    label: t('puik.dates.lastMonth'),
  },
  lastYear: {
    startDate: startOfYear(previousYear),
    endDate: endOfYear(previousYear),
    label: t('puik.dates.lastYear'),
  },
  weekToDate: {
    startDate: startOfWeek(today, { weekStartsOn: 1 }),
    endDate: endOfWeek(today, { weekStartsOn: 1 }),
    label: t('puik.dates.weekToDate'),
  },
  monthToDate: {
    startDate: startOfMonth(today),
    endDate: endOfMonth(today),
    label: t('puik.dates.monthToDate'),
  },
  quarterToDate: {
    startDate: startOfQuarter(today),
    endDate: endOfQuarter(today),
    label: t('puik.dates.quarterToDate'),
  },
  yearToDate: {
    startDate: startOfYear(today),
    endDate: endOfYear(today),
    label: t('puik.dates.yearToDate'),
  },
}
