<template>
  <nav
    class="puik-pagination"
    :class="[`puik-pagination--${variant}`]"
    role="navigation"
    :aria-label="t('puik.pagination.ariaLabel')"
  >
    <pagination-loader
      v-if="variant === PuikPaginationVariants.Loader"
      v-model="currentPage"
      :label="currentLabel"
      :loader-button-label="loaderButtonLabel"
      :disabled="loaderButtonDisabled"
    />

    <div v-else class="puik-pagination__content">
      <pagination-small
        v-if="variant === PuikPaginationVariants.Small"
        v-model="currentPage"
        v-bind="commonPaginationProps"
      />

      <pagination-mobile
        v-if="variant === PuikPaginationVariants.Mobile"
        v-model="currentPage"
        v-bind="commonPaginationProps"
      />

      <pagination-medium
        v-if="variant === PuikPaginationVariants.Medium && !disabled"
        v-model="currentPage"
        v-bind="commonPaginationProps"
        :total-item="totalItem"
      />

      <pagination-large
        v-if="variant === PuikPaginationVariants.Large"
        v-model:page="currentPage"
        :items-per-page="itemsPerPage"
        :total-item="totalItem"
        :items-per-page-options="itemsPerPageOptions"
        v-bind="commonPaginationProps"
        @update:items-per-page="emit('update:itemsPerPage', $event)"
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '@prestashopcorp/puik-locale'
import { type PaginationProps, PuikPaginationVariants } from './pagination'

import PaginationLoader from './pagination-loader.vue'
import PaginationMobile from './pagination-mobile.vue'
import PaginationSmall from './pagination-small.vue'
import PaginationMedium from './pagination-medium.vue'
import PaginationLarge from './pagination-large.vue'

defineOptions({
  name: 'PuikPagination',
})

const props = withDefaults(defineProps<PaginationProps>(), {
  variant: PuikPaginationVariants.Medium,
  itemsPerPage: 5,
  itemsPerPageOptions: () => [5, 10, 15],
  itemCount: 0,
})
const emit = defineEmits<{
  'update:page': [value: number]
  'update:itemsPerPage': [value: number]
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
    case PuikPaginationVariants.Mobile:
    case PuikPaginationVariants.Small:
      return t(path, {
        page: currentPage.value,
        maxPage: maxPage.value,
      })
    case PuikPaginationVariants.Medium:
    case PuikPaginationVariants.Large:
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
