<template>
  <div class="puik-calendars-container__body">
    <ul v-if="rangeOptions" class="puik-calendar-options-list">
      <li
        v-for="(rangeOption, key) in rangeOptionsList"
        :key="key"
        class="puik-calendar-options-list__option"
      >
        <button
          class="puik-calendar-options-list__option__button"
          :class="{
            'puik-calendar-options-list__option__button--active':
              isActiveRangeOption(rangeOption),
          }"
          @click="changePickedRangeWithOption(rangeOption)"
        >
          {{ rangeOption.label }}
        </button>
      </li>
    </ul>
    <div v-if="rangeOptions" class="puik-calendars-container--divider"></div>
    <calendar
      v-for="(number, key) in columns"
      :key="number"
      :index="key"
      :picked-range="pickedRange"
      :view="calendarsView[key]"
      :solo-calendar="isSoloCalendars"
      :first="key === 0"
      :last="key === Number(columns) - 1"
      :disabled-dates="disabledDates"
      @pick-date="pickDate"
      @change-view="changeView"
    />
  </div>
  <div v-if="!autoApply" class="puik-calendars-container__actions">
    <puik-button variant="text" @click="close()">Cancel</puik-button>
    <puik-button @click="applyPickedRange">Apply</puik-button>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, watch, ref, onBeforeMount } from 'vue'
import {
  getMonth,
  getYear,
  isSameMonth,
  addMonths,
  subMonths,
  addYears,
  subYears,
  startOfMonth,
  isBefore,
} from 'date-fns'

import PuikButton from './../../button/src/button.vue'
import rangeOptionsList, { today } from './range-optionsList'

import Calendar from './calendar.vue'

import {
  calendarsContainerProps,
  calendarsContainerEmits,
} from './calendars-container'

import type { Ref } from 'vue'
import type {
  CalendarsView,
  CalendarView,
  ChangeView,
} from './calendars-container'
import type { RangeOption } from './range-optionsList'
import type { DateRangeDateValue } from './date-range-picker'

defineOptions({
  name: 'CalendarsContainer',
})

const props = defineProps(calendarsContainerProps)
const emit = defineEmits(calendarsContainerEmits)

const isSoloCalendars = computed(
  (): boolean => props.columns === 2 && props.soloCalendars
)

const pickedRange: DateRangeDateValue = reactive({
  startDate: props.modelValue.startDate,
  endDate: props.modelValue.endDate,
})

const getCalendarView = (index: number): CalendarView => {
  const currentStartDateFirstDayMonth = pickedRange.startDate
    ? startOfMonth(pickedRange.startDate)
    : startOfMonth(today)
  const currentEndDateFirstDayMonth = pickedRange.endDate
    ? startOfMonth(pickedRange.endDate)
    : startOfMonth(today)

  if (index > 0) {
    if (index === 1) {
      if (
        isSoloCalendars.value &&
        currentStartDateFirstDayMonth &&
        currentEndDateFirstDayMonth &&
        !isSameMonth(currentStartDateFirstDayMonth, currentEndDateFirstDayMonth)
      ) {
        return {
          month: getMonth(currentEndDateFirstDayMonth || today),
          year: getYear(currentEndDateFirstDayMonth || today),
        }
      }
      return {
        month: getMonth(addMonths(currentStartDateFirstDayMonth || today, 1)),
        year: getYear(addMonths(currentStartDateFirstDayMonth || today, 1)),
      }
    }
    if (index === 2) {
      return {
        month: getMonth(addMonths(currentStartDateFirstDayMonth || today, 2)),
        year: getYear(addMonths(currentStartDateFirstDayMonth || today, 2)),
      }
    }
  }
  return {
    month: getMonth(currentStartDateFirstDayMonth || today),
    year: getYear(currentStartDateFirstDayMonth || today),
  }
}

const isCalendarsContainerChange: Ref<boolean> = ref(false)

const calendarsView: CalendarsView = reactive([
  getCalendarView(0),
  getCalendarView(1),
  getCalendarView(2),
])

const updateCalendarsView = (): void => {
  calendarsView.forEach((value: CalendarView, index: number) => {
    calendarsView[index] = getCalendarView(index)
  })
}

const isActiveRangeOption = (option: RangeOption): boolean => {
  return (
    pickedRange.startDate === option.startDate &&
    pickedRange.endDate === option.endDate
  )
}

const applyPickedRange = (): void => {
  emit('update:modelValue', {
    startDate: pickedRange.startDate,
    endDate: pickedRange.endDate,
  })
  props.close()
}

const changePickedRangeWithOption = (option: RangeOption): void => {
  pickedRange.startDate = option.startDate
  pickedRange.endDate = option.endDate
  updateCalendarsView()
}

const pickDate = (date: Date): void => {
  if (!pickedRange.startDate) {
    pickedRange.startDate = date
  } else if (!pickedRange.endDate) {
    if (!isBefore(date, pickedRange.startDate)) {
      pickedRange.endDate = date
    } else {
      pickedRange.endDate = pickedRange.startDate
      pickedRange.startDate = date
    }
  } else {
    pickedRange.endDate = undefined
    pickedRange.startDate = date
  }
}

const changeView = ({ sign, index, type }: ChangeView): void => {
  const isSub: boolean = sign === -1
  const isMonthType = type === 'm'
  const subMethod = isMonthType ? subMonths : subYears
  const addMethod = isMonthType ? addMonths : addYears

  if (isSoloCalendars.value) {
    const calendarStartMonthDate = new Date(
      calendarsView[index].year,
      calendarsView[index].month,
      1
    )
    if (isSub) {
      calendarsView[index] = {
        month: getMonth(subMethod(calendarStartMonthDate, 1)),
        year: getYear(subMethod(calendarStartMonthDate, 1)),
      }
    } else {
      calendarsView[index] = {
        month: getMonth(addMethod(calendarStartMonthDate, 1)),
        year: getYear(addMethod(calendarStartMonthDate, 1)),
      }
    }
  } else {
    for (
      let calendarViewIndex = 0;
      calendarViewIndex < Number(props.columns);
      calendarViewIndex += 1
    ) {
      const calendarViewStartMonthDate = new Date(
        calendarsView[calendarViewIndex].year,
        calendarsView[calendarViewIndex].month,
        1
      )
      if (isSub) {
        calendarsView[calendarViewIndex] = {
          month: getMonth(subMethod(calendarViewStartMonthDate, 1)),
          year: getYear(subMethod(calendarViewStartMonthDate, 1)),
        }
      } else {
        calendarsView[calendarViewIndex] = {
          month: getMonth(addMethod(calendarViewStartMonthDate, 1)),
          year: getYear(addMethod(calendarViewStartMonthDate, 1)),
        }
      }
    }
  }
}

onBeforeMount(() => {
  if (props.autoApply) {
    watch(pickedRange, (newValue: DateRangeDateValue): void => {
      if (newValue.startDate && newValue.endDate) {
        isCalendarsContainerChange.value = true
        emit('update:modelValue', {
          startDate: newValue.startDate,
          endDate: newValue.endDate,
        })
        updateCalendarsView()
        props.close()
      }
    })
  }
})
</script>
