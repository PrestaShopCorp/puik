<template>
  <div class="puik-calendar">
    <div class="puik-calendar__month-year-selector">
      <div class="puik-calendar__month-year-selector__navigation-prev">
        <button
          v-if="soloCalendar || first"
          class="puik-calendar__month-year-selector__button"
          @click="changeView(-1, 'y')"
        >
          first_page
        </button>
        <button
          v-if="soloCalendar || first"
          class="puik-calendar__month-year-selector__button"
          @click="changeView(-1, 'm')"
        >
          chevron_left
        </button>
      </div>
      <div>{{ months[view.month] }} {{ view.year }}</div>
      <div class="puik-calendar__month-year-selector__navigation-next">
        <button
          v-if="soloCalendar || last"
          class="puik-calendar__month-year-selector__button"
          @click="changeView(1, 'm')"
        >
          chevron_right
        </button>
        <button
          v-if="soloCalendar || last"
          class="puik-calendar__month-year-selector__button"
          @click="changeView(1, 'y')"
        >
          last_page
        </button>
      </div>
    </div>
    <table class="puik-calendar__table__header">
      <thead>
        <tr>
          <th
            v-for="day in days"
            :key="day.index"
            class="puik-calendar__table__header__cell"
          >
            {{ day.label }}
          </th>
        </tr>
      </thead>
    </table>
    <div class="puik-calendar--divider"></div>
    <table class="puik-calendar__table__body">
      <tbody>
        <tr
          v-for="(week, weekIndex) in calendarDates"
          :key="weekIndex"
          class="puik-calendar__table__body__line"
        >
          <td
            v-for="(day, dayIndex) in week"
            :key="`${weekIndex}:${dayIndex}`"
            class="puik-calendar__table__body__cell"
            :class="{
              'puik-calendar__table__body__cell--start':
                pickedRange.startDate && day
                  ? isSameDay(pickedRange.startDate, day)
                  : false,
              'puik-calendar__table__body__cell--end':
                pickedRange.endDate && day
                  ? isSameDay(pickedRange.endDate, day)
                  : false,
              'puik-calendar__table__body__cell--active': isActiveDate(day),
              'puik-calendar__table__body__cell--disabled': dateIsDisabled(day),
            }"
          >
            <calendar-cell v-if="day" :date="day" @click="pickDate(day)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  getWeeksInMonth,
  endOfMonth,
  eachDayOfInterval,
  getWeekOfMonth,
  getDay,
  isSameDay,
  isWithinInterval,
} from 'date-fns'
import { useLocale } from '@puik/hooks'

import { calendarProps, calendarEmits } from './calendar'
import CalendarCell from './calendar-cell.vue'

import type { Calendar, WeekDates, CalendarDate } from './calendar'

defineOptions({
  name: 'Calendar',
})

const props = defineProps(calendarProps)
const emit = defineEmits(calendarEmits)
const { t } = useLocale()

const days = [
  { index: 1, label: t('puik.dates.days.monday.short') },
  { index: 2, label: t('puik.dates.days.tuesday.short') },
  { index: 3, label: t('puik.dates.days.wednesday.short') },
  { index: 4, label: t('puik.dates.days.thursday.short') },
  { index: 5, label: t('puik.dates.days.friday.short') },
  { index: 6, label: t('puik.dates.days.saturday.short') },
  { index: 0, label: t('puik.dates.days.sunday.short') },
]

const months = [
  t('puik.dates.months.january.long'),
  t('puik.dates.months.february.long'),
  t('puik.dates.months.march.long'),
  t('puik.dates.months.april.long'),
  t('puik.dates.months.may.long'),
  t('puik.dates.months.june.long'),
  t('puik.dates.months.july.long'),
  t('puik.dates.months.august.long'),
  t('puik.dates.months.september.long'),
  t('puik.dates.months.october.long'),
  t('puik.dates.months.november.long'),
  t('puik.dates.months.december.long'),
]

const dateIsDisabled = (date: Date | undefined): boolean => {
  if (!date || !props.disabledDates) {
    return false
  }
  if (Array.isArray(props.disabledDates)) {
    let dayIsIncludedInDisabledDates = false
    props.disabledDates.forEach((testedDate) => {
      dayIsIncludedInDisabledDates =
        dayIsIncludedInDisabledDates || isSameDay(testedDate, date)
    })
    return dayIsIncludedInDisabledDates
  }
  if (typeof props.disabledDates === 'function') {
    return props.disabledDates(date)
  }
  if (
    typeof props.disabledDates === 'object' &&
    props.disabledDates !== undefined
  ) {
    if (props.disabledDates instanceof Date) {
      return isSameDay(props.disabledDates, date)
    }
    if (props.disabledDates.startDate && props.disabledDates.endDate) {
      return isWithinInterval(date, {
        start: props.disabledDates.startDate,
        end: props.disabledDates.endDate,
      })
    }
  }
  return false
}

const firstDayOfMonth = computed((): Date => {
  return new Date(props.view.year, props.view.month, 1)
})

const weeksInMonth = computed((): number => {
  return getWeeksInMonth(firstDayOfMonth.value, {
    weekStartsOn: 1,
  })
})

const daysInMonth = computed((): Date[] => {
  return eachDayOfInterval({
    start: firstDayOfMonth.value,
    end: endOfMonth(firstDayOfMonth.value),
  })
})

const calendarDates = computed((): Calendar => {
  const dates: Calendar = []
  for (let week = 1; week < weeksInMonth.value + 1; week += 1) {
    const weekDates: WeekDates = []
    days.forEach((day) => {
      const date: CalendarDate = getDateForCalendar(week, day.index)
      weekDates.push(date)
    })
    dates.push(weekDates)
  }
  return dates
})

const getDateForCalendar = (week: number, dayIndex: number): CalendarDate => {
  let dayToReturn: CalendarDate
  daysInMonth.value.forEach((date: Date): boolean => {
    if (
      getWeekOfMonth(date, { weekStartsOn: 1 }) === week &&
      getDay(date) === dayIndex
    ) {
      dayToReturn = date
      return true
    }
    return false
  })
  return dayToReturn
}

const pickDate = (date: Date): void => {
  emit('pick-date', date)
}

const isActiveDate = (date: CalendarDate): boolean => {
  return props.pickedRange.startDate && props.pickedRange.endDate && date
    ? isWithinInterval(date, {
        start: props.pickedRange.startDate,
        end: props.pickedRange.endDate,
      })
    : false
}

const changeView = (sign: number, type: string): void => {
  emit('change-view', { sign, index: props.index, type })
}
</script>
