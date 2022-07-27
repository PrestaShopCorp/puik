<template>
  <div></div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'

import {
  calendarsContainerProps,
  calendarsContainerEmits,
} from './calendars-container'
defineOptions({
  name: 'CalendarsContainer',
})

const props = defineProps(calendarsContainerProps)
const emit = defineEmits(calendarsContainerEmits)

const dateRange = useVModel(props, 'modelValue', emit)
</script>
