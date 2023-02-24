<template>
  <span class="puik-pagination__label">
    {{ label }}
  </span>

  <div class="puik-pagination__content">
    <puik-button
      :aria-label="t('puik.pagination.previous', { page: page - 1 })"
      :disabled="page <= 1 || disabled"
      class="puik-pagination__previous-button puik-pagination__button"
      left-icon="keyboard_arrow_left"
      variant="tertiary"
      @click="page -= 1"
    >
      <span class="puik-pagination__previous-button-text">
        {{ t('puik.pagination.previous') }}
      </span>
    </puik-button>

    <div class="puik-pagination__jumper">
      <puik-select
        v-model="page"
        :aria-label="t('puik.pagination.large.choosePage')"
        :disabled="disabled"
        class="puik-pagination__select"
      >
        <puik-option
          v-for="index in maxPage"
          :key="`puik-pagination-option-${index}`"
          :value="index"
        >
          {{ index }}
        </puik-option>
      </puik-select>

      <span class="puik-pagination__jumper-description">
        {{ t('puik.pagination.large.jumperDescription', { maxPage }) }}
      </span>
    </div>

    <puik-button
      :aria-label="t('puik.pagination.next', { page: page + 1 })"
      :disabled="page >= maxPage || disabled"
      class="puik-pagination__button puik-pagination__next-button"
      right-icon="keyboard_arrow_right"
      variant="tertiary"
      @click="page += 1"
    >
      <span class="puik-pagination__next-button-text">
        {{ t('puik.pagination.next') }}
      </span>
    </puik-button>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { PuikSelect, PuikOption } from '@puik/components/select'
import { PuikButton } from '@puik/components/button'
import { useLocale } from '@puik/hooks'
import { paginationLargeProps } from './pagination-large'
defineOptions({
  name: 'PuikPaginationLarge',
})

const props = defineProps(paginationLargeProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const { t } = useLocale()

const page = useVModel(props, 'modelValue', emit)
</script>
