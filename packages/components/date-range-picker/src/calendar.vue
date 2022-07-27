<template>
  <div></div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'

import { calendarProps, calendarEmits } from './calendar'
defineOptions({
  name: 'Calendar',
})

const props = defineProps(calendarProps)
const emit = defineEmits(calendarEmits)

const dateRange = useVModel(props, 'modelValue', emit)
</script>
