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
      @click="emit('update:page', page - 1)"
    >
      <span class="puik-pagination__previous-button-text">
        {{ t('puik.pagination.previous') }}
      </span>
    </puik-button>

    <div class="puik-pagination__jumper">
      <puik-select
        :model-value="page"
        :aria-label="t('puik.pagination.large.choosePage')"
        :disabled="disabled"
        class="puik-pagination__select"
        @update:model-value="emit('update:page', $event)"
      >
        <puik-option
          v-for="index in maxPage"
          :key="`puik-pagination__page-selector__option-${index}`"
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
      @click="emit('update:page', page + 1)"
    >
      <span class="puik-pagination__next-button-text">
        {{ t('puik.pagination.next') }}
      </span>
    </puik-button>
  </div>

  <puik-select
    v-model="currentItemsPerPage"
    class="puik-pagination__items-per-page-select"
  >
    <puik-option
      v-for="item in itemsPerPageOptions"
      :key="`puik-pagination__items-per-page-select__option-${item}`"
      :value="item"
      class="puik-pagination__items-per-page-select__option"
    >
      {{ item }}
    </puik-option>
  </puik-select>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import { PuikSelect, PuikOption } from '@prestashopcorp/puik-components/select';
import { PuikButton } from '@prestashopcorp/puik-components/button';
import { useLocale } from '@prestashopcorp/puik-locale';
import { type PaginationLargeProps } from './pagination-large';
defineOptions({
  name: 'PuikPaginationLarge'
});
const props = withDefaults(defineProps<PaginationLargeProps>(), {
  itemCount: 0
});
const emit = defineEmits<{
  'update:page': [value: number]
  'update:itemsPerPage': [value: number]
}>();

const currentItemsPerPage = useVModel(props, 'itemsPerPage', emit);

const { t } = useLocale();
</script>
