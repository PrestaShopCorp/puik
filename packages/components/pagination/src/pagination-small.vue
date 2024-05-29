<template>
  <span
    class="puik-pagination__label"
    :data-test="dataTest != undefined ? `label-${dataTest}` : undefined"
  >
    {{ label }}
  </span>

  <puik-button
    :aria-label="t('puik.pagination.previous', { page: page - 1 })"
    :disabled="page <= 1 || disabled"
    :data-test="
      dataTest != undefined ? `previousButton-${dataTest}` : undefined
    "
    class="puik-pagination__previous-button puik-pagination__button"
    left-icon="keyboard_arrow_left"
    variant="secondary"
    @click="page -= 1"
  />

  <puik-button
    :aria-label="t('puik.pagination.next', { page: page + 1 })"
    :disabled="page >= maxPage || disabled"
    :data-test="dataTest != undefined ? `nextButton-${dataTest}` : undefined"
    class="puik-pagination__button puik-pagination__next-button"
    right-icon="keyboard_arrow_right"
    variant="secondary"
    @click="page += 1"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PuikButton } from '@prestashopcorp/puik-components/button';
import { useLocale } from '@prestashopcorp/puik-locale';
import { type PaginationSmallProps } from './pagination-small';
defineOptions({
  name: 'PuikPaginationSmall'
});

const props = withDefaults(defineProps<PaginationSmallProps>(), {
  modelValue: 1
});
const emit = defineEmits<{(e: 'update:modelValue', value: number): void}>();

const { t } = useLocale();

const page = computed({
  get: () => props.modelValue,
  set: (page: number) => emit('update:modelValue', page)
});
</script>
