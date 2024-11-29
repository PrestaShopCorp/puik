<template>
  <nav
    :id="props.id"
    class="puik-pagination"
    :class="[`puik-pagination--${variant}`]"
    role="navigation"
    :aria-label="t('puik.pagination.ariaLabel')"
    :data-test="dataTest"
  >
    <pagination-loader
      v-if="variant === PuikPaginationVariants.Loader"
      :id="`${props.id}--loader`"
      v-model="currentPage"
      :data-test="dataTest"
      :disabled="loaderButtonDisabled"
      :label="currentLabel"
      :loader-button-label="loaderButtonLabel"
    />

    <div
      v-else
      class="puik-pagination__content"
    >
      <pagination-mobile
        v-if="variant === PuikPaginationVariants.Mobile"
        :id="`${props.id}--mobile`"
        v-model="currentPage"
        v-bind="commonPaginationProps"
        :data-test="dataTest"
      />

      <pagination-small
        v-if="variant === PuikPaginationVariants.Small"
        :id="`${props.id}--small`"
        v-model="currentPage"
        v-bind="commonPaginationProps"
        :data-test="dataTest"
        :display-results="displayResults"
      />

      <pagination-medium
        v-if="variant === PuikPaginationVariants.Medium && !disabled"
        :id="`${props.id}--medium`"
        v-model="currentPage"
        v-bind="commonPaginationProps"
        :data-test="dataTest"
        :display-results="displayResults"
        :total-item="totalItem"
      />

      <pagination-large
        v-if="variant === PuikPaginationVariants.Large"
        :id="`${props.id}--large`"
        v-model:page="currentPage"
        :data-test="dataTest"
        :display-items-per-page="displayItemsPerPage"
        :display-results="displayResults"
        :items-per-page="itemsPerPage"
        :items-per-page-options="itemsPerPageOptions"
        :total-item="totalItem"
        v-bind="commonPaginationProps"
        @update:items-per-page="emit('update:itemsPerPage', $event)"
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { generateId } from '@prestashopcorp/puik-utils';
import { useLocale } from '@prestashopcorp/puik-locale';
import { type PaginationProps, PuikPaginationVariants } from './pagination';

import PaginationLoader from './pagination-loader.vue';
import PaginationMobile from './pagination-mobile.vue';
import PaginationSmall from './pagination-small.vue';
import PaginationMedium from './pagination-medium.vue';
import PaginationLarge from './pagination-large.vue';

defineOptions({
  name: 'PuikPagination'
});

const props = withDefaults(defineProps<PaginationProps>(), {
  id: `puik-pagination-${generateId()}`,
  variant: PuikPaginationVariants.Medium,
  itemsPerPage: 5,
  itemsPerPageOptions: () => [5, 10, 15],
  displayItemsPerPage: true,
  displayResults: true
});
const emit = defineEmits<{
  'update:page': [value: number]
  'update:itemsPerPage': [value: number]
}>();

const { t } = useLocale();

const currentPage = computed({
  get: () => props.page,
  set: (page: number) => emit('update:page', page)
});

const itemCount = computed(() => props.page * props.itemsPerPage);
const loaderButtonDisabled = computed(() => itemCount.value === props.totalItem);

const maxPage = computed(() => {
  return Math.ceil(props.totalItem / props.itemsPerPage);
});

const disabled = computed(() => !props.totalItem || !maxPage.value);

const currentLabel = computed(() => {
  if (props.label) return props.label;
  const path = `puik.pagination.${props.variant}.label`;

  switch (props.variant) {
    case PuikPaginationVariants.Mobile:
    case PuikPaginationVariants.Small:
      return t(path, {
        page: currentPage.value,
        maxPage: maxPage.value,
        totalItem: props.totalItem
      });
    case PuikPaginationVariants.Medium:
    case PuikPaginationVariants.Large:
      return t(path, {
        totalItem: props.totalItem
      });
    default:
      return t(path, {
        itemCount: itemCount.value,
        totalItem: props.totalItem
      });
  }
});

const commonPaginationProps = computed(() => {
  return {
    label: currentLabel.value,
    maxPage: maxPage.value,
    disabled: disabled.value
  };
});

watch(() => props.itemsPerPage, () => {
  if (currentPage.value > maxPage.value) {
    currentPage.value = maxPage.value;
  }
});
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-pagination.scss';
@use '@prestashopcorp/puik-theme/src/puik-button.scss';
@use '@prestashopcorp/puik-theme/src/puik-select.scss';
@use '@prestashopcorp/puik-theme/src/puik-option.scss';
</style>
