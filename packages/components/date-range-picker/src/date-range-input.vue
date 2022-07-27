<template>
  <div></div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'

import { dateRangeInputProps, dateRangeInputEmits } from './date-range-input'
defineOptions({
  name: 'PuikDateRangeInput',
})

const props = defineProps(dateRangeInputProps)
const emit = defineEmits(dateRangeInputEmits)

const dateRange = useVModel(props, 'modelValue', emit)
</script>
