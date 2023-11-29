<template>
  <nav
    class="puik-pagination"
    :class="[`puik-pagination--${variant}`]"
    role="navigation"
    :aria-label="t('puik.pagination.ariaLabel')"
    :data-test="dataTest"
  >
    <pagination-loader
      v-if="variant === PuikPaginationVariantEnum.loader"
      v-model="currentPage"
      :label="currentLabel"
      :loader-button-label="loaderButtonLabel"
      :disabled="loaderButtonDisabled"
      :data-test="dataTest"
    />

    <div v-else class="puik-pagination__content">
      <pagination-small
        v-if="variant === PuikPaginationVariantEnum.small"
        v-model="currentPage"
        v-bind="commonPaginationProps"
        :data-test="dataTest"
      />

      <pagination-mobile
        v-if="variant === PuikPaginationVariantEnum.mobile"
        v-model="currentPage"
        v-bind="commonPaginationProps"
        :data-test="dataTest"
      />

      <pagination-medium
        v-if="variant === PuikPaginationVariantEnum.medium && !disabled"
        v-model="currentPage"
        v-bind="commonPaginationProps"
        :total-item="totalItem"
        :data-test="dataTest"
      />

      <pagination-large
        v-if="variant === PuikPaginationVariantEnum.large"
        v-model:page="currentPage"
        :items-per-page="itemsPerPage"
        :total-item="totalItem"
        :items-per-page-options="itemsPerPageOptions"
        :data-test="dataTest"
        v-bind="commonPaginationProps"
        @update:items-per-page="emit('update:itemsPerPage', $event)"
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '@puik/hooks'
import { paginationProps, PuikPaginationVariantEnum } from './pagination'

import PaginationLoader from './pagination-loader.vue'
import PaginationMobile from './pagination-mobile.vue'
import PaginationSmall from './pagination-small.vue'
import PaginationMedium from './pagination-medium.vue'
import PaginationLarge from './pagination-large.vue'

defineOptions({
  name: 'PuikPagination',
})

const props = defineProps(paginationProps)
const emit = defineEmits<{
  (e: 'update:page', value: number): void
  (e: 'update:itemsPerPage', value: number): void
}>()

const { t } = useLocale()

const currentPage = computed({
  get: () => props.page,
  set: (page: number) => emit('update:page', page),
})

const currentLabel = computed(() => {
  if (props.label) return props.label
  const path = `puik.pagination.${props.variant}.label`

  switch (props.variant) {
    case PuikPaginationVariantEnum.mobile:
    case PuikPaginationVariantEnum.small:
      return t(path, {
        page: currentPage.value,
        maxPage: maxPage.value,
      })
    case PuikPaginationVariantEnum.medium:
    case PuikPaginationVariantEnum.large:
      return t(path, {
        totalItem: props.totalItem,
      })
    default:
      return t(path, {
        itemCount: props.itemCount,
        totalItem: props.totalItem,
      })
  }
})

const commonPaginationProps = computed(() => {
  return {
    label: currentLabel.value,
    maxPage: maxPage.value,
    disabled: disabled.value,
  }
})

const disabled = computed(() => !props.totalItem || !maxPage.value)

const maxPage = computed(() => {
  return Math.ceil(props.totalItem / props.itemsPerPage)
})
</script>
