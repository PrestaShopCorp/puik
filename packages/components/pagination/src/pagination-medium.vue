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
      variant="secondary"
      :data-test="
        dataTest != undefined ? `previousButton-${dataTest}` : undefined
      "
      @click="page -= 1"
    />

    <ul
      v-if="!disabled"
      class="puik-pagination__pager"
    >
      <li class="puik-pagination__pager-item">
        <puik-button
          :aria-current="page === 1"
          :aria-label="t('puik.pagination.goTo', { page: 1 })"
          :variant="page === 1 ? 'secondary' : 'text'"
          class="puik-pagination__button puik-pagination__pager-button"
          @click="page = 1"
        >
          1
        </puik-button>
      </li>

      <li
        v-if="pager[0] > 2"
        class="puik-pagination__pager-item"
        aria-hidden="true"
      >
        <span class="puik-pagination__pager-separator"> &hellip; </span>
      </li>

      <li
        v-for="(item, index) in pager"
        :key="index"
        class="puik-pagination__pager-item"
      >
        <puik-button
          :aria-label="t('puik.pagination.goTo', { page: item })"
          :variant="page === item ? 'secondary' : 'text'"
          :aria-current="page === item"
          class="puik-pagination__button puik-pagination__pager-button"
          @click="page = item"
        >
          {{ item }}
        </puik-button>
      </li>

      <li
        v-if="pager[pager.length - 1] !== maxPage - 1 && pager.length > 0"
        class="puik-pagination__pager-item"
        aria-hidden="true"
      >
        <span class="puik-pagination__pager-separator"> &hellip; </span>
      </li>

      <li
        v-if="maxPage >= 2"
        class="puik-pagination__pager-item"
      >
        <puik-button
          :aria-current="page === maxPage"
          :aria-label="t('puik.pagination.goTo', { page: maxPage })"
          :variant="page === maxPage ? 'secondary' : 'text'"
          class="puik-pagination__button puik-pagination__pager-button"
          @click="page = maxPage"
        >
          {{ maxPage }}
        </puik-button>
      </li>
    </ul>

    <puik-button
      :aria-label="t('puik.pagination.next', { page: page + 1 })"
      :disabled="page >= maxPage || disabled"
      class="puik-pagination__button puik-pagination__next-button"
      right-icon="keyboard_arrow_right"
      variant="secondary"
      :data-test="dataTest != undefined ? `nextButton-${dataTest}` : undefined"
      @click="page += 1"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PuikButton } from '@prestashopcorp/puik-components/button';
import { useLocale } from '@prestashopcorp/puik-locale';
import { type PaginationMediumProps } from './pagination-medium';
defineOptions({
  name: 'PuikPaginationMedium'
});

const props = withDefaults(defineProps<PaginationMediumProps>(), {
  modelValue: 1
});
const emit = defineEmits<{(e: 'update:modelValue', value: number): void}>();

const { t } = useLocale();

const page = computed({
  get: () => props.modelValue,
  set: (page: number) => emit('update:modelValue', page)
});

const pager = computed(() => {
  if (props.maxPage <= 2) return [];

  const maxPagesDisplayed = page.value <= 3 ? 4 : 5;
  const halfPagesDisplayed = 2;
  const pages: number[] = [];
  let startPage: number;

  if (page.value - halfPagesDisplayed <= 1) startPage = 2;
  else if (page.value + halfPagesDisplayed > props.maxPage) {
    if (props.maxPage - maxPagesDisplayed <= 1) startPage = 2;
    else startPage = props.maxPage - maxPagesDisplayed + 1;
  } else startPage = page.value - halfPagesDisplayed;

  pages.push(startPage);

  for (
    let i = startPage + 1;
    i < props.maxPage && i < startPage + maxPagesDisplayed;
    i++
  ) {
    pages.push(i);
  }

  return pages;
});
</script>
