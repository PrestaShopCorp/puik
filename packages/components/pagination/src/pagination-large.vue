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
      <puik-select
        :id="`${props.id}__select-jumper`"
        :key="page"
        :model-value="page"
        :disabled="disabled"
        :data-test="
          dataTest != undefined ? `pageSelector-${dataTest}` : undefined
        "
        class="puik-pagination__select"
        :open="openJumper"
        @update:model-value="emit('update:page', $event)"
      >
        <puik-option
          v-for="pageNb in maxPage"
          :key="`puik-pagination__page-selector__option-${pageNb}`"
          :label="pageNb"
          :value="pageNb"
          :is-selected="page === pageNb"
          :data-test="
            dataTest != undefined
              ? `pageSelectorOption-${dataTest}-${index}`
              : undefined
          "
          @select="(payload) => emit('update:page', payload.value)"
          @open="(state) => openJumper = state"
        >
          {{ pageNb }}
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
  <puik-select
    v-if="displayItemsPerPage"
    :id="`${props.id}__select-items-per-page`"
    :key="currentItemsPerPage"
    v-model="currentItemsPerPage"
    class="puik-pagination__items-per-page-select"
    :open="openItemPerPages"
    @update:model-value="emit('update:itemsPerPage', currentItemsPerPage)"
  >
    <puik-option
      v-for="item in itemsPerPageOptions"
      :key="`puik-pagination__items-per-page-select__option-${item}`"
      :label="item"
      :value="item"
      :is-selected="currentItemsPerPage === item"
      class="puik-pagination__items-per-page-select__option"
      @select="(payload) => currentItemsPerPage = payload.value"
      @open="(state) => openItemPerPages = state"
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
import { ref } from 'vue';
defineOptions({
  name: 'PuikPaginationLarge'
});

const props = defineProps<PaginationLargeProps>();

const emit = defineEmits<{
  'update:page': [value: number];
  'update:itemsPerPage': [value: number];
}>();

const currentItemsPerPage = useVModel(props, 'itemsPerPage', emit);

const { t } = useLocale();

const openJumper = ref(false);
const openItemPerPages = ref(false);
</script>
