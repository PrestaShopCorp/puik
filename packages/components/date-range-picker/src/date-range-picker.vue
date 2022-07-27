<template>
  <div></div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'

import { dateRangePickerProps, dateRangePickerEmits } from './date-range-picker'
defineOptions({
  name: 'PuikDateRangePicker',
})

const props = defineProps(dateRangePickerProps)
const emit = defineEmits(dateRangePickerEmits)

const dateRange = useVModel(props, 'modelValue', emit)
</script>
