<template>
  <puik-button
    :aria-label="t('puik.pagination.previous', { page: modelValue - 1 })"
    :disabled="modelValue <= 1 || disabled"
    class="puik-pagination__previous-button puik-pagination__button"
    left-icon="keyboard_arrow_left"
    variant="secondary"
    :data-test="`previousButton-${dataTest}`"
    @click="emit('update:modelValue', modelValue - 1)"
  ></puik-button>

  <span class="puik-pagination__label" :data-test="`label-${dataTest}`">
    {{ label }}
  </span>

  <puik-button
    :aria-label="t('puik.pagination.next', { page: modelValue + 1 })"
    :disabled="modelValue >= maxPage || disabled"
    class="puik-pagination__button puik-pagination__next-button"
    right-icon="keyboard_arrow_right"
    variant="secondary"
    :data-test="`nextButton-${dataTest}`"
    @click="emit('update:modelValue', modelValue + 1)"
  ></puik-button>
</template>

<script setup lang="ts">
import { PuikButton } from '@puik/components/button'
import { useLocale } from '@puik/hooks'
import { paginationMobileProps } from './pagination-mobile'
defineOptions({
  name: 'PuikPaginationMobile',
})

defineProps(paginationMobileProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const { t } = useLocale()
</script>
