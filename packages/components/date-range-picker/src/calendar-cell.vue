<template>
  <button class="puik-calendar-cell-button">
    {{ getDate(date) }}
  </button>
</template>

<script setup lang="ts">
import { getDate } from 'date-fns'
import { calendarCellProps } from './calendar-cell'
defineOptions({
  name: 'CalendarCell',
})

const props = defineProps(calendarCellProps)
</script>
