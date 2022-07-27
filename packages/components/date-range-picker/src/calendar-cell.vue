<template>
  <div></div>
</template>

<script setup lang="ts">
import { calendarCellProps } from './calendar-cell'
defineOptions({
  name: 'Calendar',
})

const props = defineProps(calendarCellProps)
</script>
