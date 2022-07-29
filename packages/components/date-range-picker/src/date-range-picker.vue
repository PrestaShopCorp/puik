<template>
  <popover v-slot="{ open }" class="relative puik-date-range-picker">
    <date-range-button
      :date-range="dateRange"
      :disabled="disabled"
      :error="error"
      :active="open"
      :printed-format="printedFormat"
    />
    <transition
      appear
      enter-active-class="puik-date-range-picker__transition__enter--active"
      enter-from-class="puik-date-range-picker__transition__enter--from"
      enter-to-class="puik-date-range-picker__transition__enter--to"
      leave-active-class="puik-date-range-picker__transition__leave--active"
      leave-from-class="puik-date-range-picker__transition__leave--from"
      leave-to-class="puik-date-range-picker__transition__leave--to"
    >
      <popover-panel
        v-slot="{ close }"
        class="absolute puik-date-range-picker__calendars-container"
      >
        <calendars-container
          v-model="dateRange"
          :columns="Number(columns)"
          :solo-calendars="soloCalendars"
          :range-options="rangeOptions"
          :auto-apply="autoApply"
          :close="close"
          :disabled-dates="disabledDates"
        />
      </popover-panel>
    </transition>
  </popover>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { parseISO, formatISO } from 'date-fns'
import { Popover, PopoverPanel } from '@headlessui/vue'
import { dateRangePickerProps, dateRangePickerEmits } from './date-range-picker'

import DateRangeButton from './date-range-button.vue'
import CalendarsContainer from './calendars-container.vue'

import type { DateRangeDateValue } from './date-range-picker'

defineOptions({
  name: 'PuikDateRangePicker',
})

const props = defineProps(dateRangePickerProps)
const emit = defineEmits(dateRangePickerEmits)

const dateRange = computed({
  get(): DateRangeDateValue {
    return {
      startDate: props.modelValue?.startDate
        ? parseISO(props.modelValue.startDate)
        : undefined,
      endDate: props.modelValue?.endDate
        ? parseISO(props.modelValue.endDate)
        : undefined,
    }
  },
  set(range): void {
    emit('update:modelValue', {
      startDate: range.startDate ? formatISO(range.startDate) : undefined,
      endDate: range.endDate ? formatISO(range.endDate) : undefined,
    })
  },
})
</script>
