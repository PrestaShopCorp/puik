<template>
  <span
    v-if="displayResults"
    class="puik-pagination__label"
    :data-test="dataTest != undefined ? `label-${dataTest}` : undefined"
  >
    {{ label }}
  </span>

  <div class="puik-pagination__content">
    <puik-button
      :aria-label="t('puik.pagination.previous', { page: page - 1 })"
      :disabled="page <= 1 || disabled"
      class="puik-pagination__previous-button puik-pagination__button"
      left-icon="keyboard_arrow_left"
      variant="tertiary"
      :data-test="
        dataTest != undefined ? `previousButton-${dataTest}` : undefined
      "
      @click="emit('update:page', page - 1)"
    >
      <span class="puik-pagination__previous-button-text">
        {{ t('puik.pagination.previous') }}
      </span>
    </puik-button>

    <div class="puik-pagination__jumper">
      <!--
        <puik-select
          :key="page"
          :model-value="page"
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
      -->

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
      :data-test="dataTest != undefined ? `nextButton-${dataTest}` : undefined"
      @click="emit('update:page', page + 1)"
    >
      <span class="puik-pagination__next-button-text">
        {{ t('puik.pagination.next') }}
      </span>
    </puik-button>
  </div>
  <span
    v-if="displayItemsPerPage"
    class="puik-pagination__items-per-page-label"
  >
    {{ t('puik.pagination.itemPerPageLabel', { maxPage }) }}
  </span>
  <!--
    <puik-select
      v-if="displayItemsPerPage"
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
  -->
</template>

<script setup lang="ts">
// import { useVModel } from '@vueuse/core';
// import { PuikSelect, PuikOption } from '@prestashopcorp/puik-components/select';
import { PuikButton } from '@prestashopcorp/puik-components/button';
import { useLocale } from '@prestashopcorp/puik-locale';
import { type PaginationLargeProps } from './pagination-large';
defineOptions({
  name: 'PuikPaginationLarge'
});

const props = defineProps<PaginationLargeProps>();
console.log(props);

const emit = defineEmits<{
  'update:page': [value: number];
  'update:itemsPerPage': [value: number];
}>();

// const currentItemsPerPage = useVModel(props, 'itemsPerPage', emit);

const { t } = useLocale();
</script>
