<template>
  <puik-button
    :aria-label="t('puik.pagination.previous', { page: modelValue - 1 })"
    :disabled="modelValue <= 1 || disabled"
    class="puik-pagination__previous-button puik-pagination__button"
    left-icon="keyboard_arrow_left"
    variant="secondary"
    @click="emit('update:modelValue', modelValue - 1)"
  />

  <span class="puik-pagination__label">
    {{ label }}
  </span>

  <puik-button
    :aria-label="t('puik.pagination.next', { page: modelValue + 1 })"
    :disabled="modelValue >= maxPage || disabled"
    class="puik-pagination__button puik-pagination__next-button"
    right-icon="keyboard_arrow_right"
    variant="secondary"
    @click="emit('update:modelValue', modelValue + 1)"
  />
</template>

<script setup lang="ts">
import { PuikButton } from '@prestashopcorp/puik-components/button';
import { useLocale } from '@prestashopcorp/puik-locale';
import { type PaginationMobileProps } from './pagination-mobile';
defineOptions({
  name: 'PuikPaginationMobile'
});

withDefaults(defineProps<PaginationMobileProps>(), {
  modelValue: 1
});
const emit = defineEmits<{(e: 'update:modelValue', value: number): void}>();

const { t } = useLocale();
</script>
