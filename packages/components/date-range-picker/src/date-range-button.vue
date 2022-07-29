<template>
  <PopoverButton
    :disabled="disabled"
    class="puik-date-range-button"
    :class="{
      'puik-date-range-button--disabled': disabled,
      'puik-date-range-button--active': active,
      'puik-date-range-button--error': error,
    }"
  >
    <span class="puik-date-range-button__icon">date_range</span>
    <span
      v-if="!startDate"
      class="puik-date-range-button__date puik-date-range-button__date--default"
    >
      {{ t('puik.dates.startDate') }}
    </span>
    <span v-else class="puik-date-range-button__date">{{ startDate }}</span>
    <span class="puik-date-range-button__separator">To</span>
    <span
      v-if="!endDate"
      class="puik-date-range-button__date puik-date-range-button__date--default"
    >
      {{ t('puik.dates.endDate') }}
    </span>
    <span v-else class="puik-date-range-button__date">{{ endDate }}</span>
  </PopoverButton>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { format } from 'date-fns'
import { PopoverButton } from '@headlessui/vue'
import { useLocale } from '@puik/hooks'

import { dateRangeInputProps } from './date-range-button'
defineOptions({
  name: 'PuikDateRangeButton',
})

const props = defineProps(dateRangeInputProps)
const { t } = useLocale()

const startDate = computed((): string | null => {
  return props.dateRange.startDate
    ? format(props.dateRange.startDate, props.printedFormat)
    : null
})

const endDate = computed((): string | null => {
  return props.dateRange.endDate
    ? format(props.dateRange.endDate, props.printedFormat)
    : null
})
</script>
