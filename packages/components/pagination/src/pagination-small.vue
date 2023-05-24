<template>
  <span class="puik-pagination__label">
    {{ label }}
  </span>

  <puik-button
    :aria-label="t('puik.pagination.previous', { page: page - 1 })"
    :disabled="page <= 1 || disabled"
    class="puik-pagination__previous-button puik-pagination__button"
    left-icon="keyboard_arrow_left"
    variant="secondary"
    @click="page -= 1"
  ></puik-button>

  <puik-button
    :aria-label="t('puik.pagination.next', { page: page + 1 })"
    :disabled="page >= maxPage || disabled"
    class="puik-pagination__button puik-pagination__next-button"
    right-icon="keyboard_arrow_right"
    variant="secondary"
    @click="page += 1"
  ></puik-button>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { PuikButton } from '@puik/components/button'
import { useLocale } from '@puik/hooks'
import { paginationSmallProps } from './pagination-small'
defineOptions({
  name: 'PuikPaginationSmall',
})

const props = defineProps(paginationSmallProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const { t } = useLocale()

const page = useVModel(props, 'modelValue', emit)
</script>
