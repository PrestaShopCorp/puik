<template>
  <nav
    class="puik-pagination"
    :class="[`puik-pagination--${variant}`]"
    role="navigation"
    :aria-label="t('puik.pagination.ariaLabel')"
  >
    <pagination-loader
      v-if="variant === PaginationVariantEnum.loader"
      v-model="page"
      :label="currentLabel"
      :loader-button-label="loaderButtonLabel"
      :disabled="disabled"
    />

    <div v-else class="puik-pagination__content">
      <pagination-small
        v-if="variant === PaginationVariantEnum.small"
        v-model="page"
        v-bind="commonPaginationProps"
      />

      <pagination-mobile
        v-if="variant === PaginationVariantEnum.mobile"
        v-model="page"
        v-bind="commonPaginationProps"
      />

      <pagination-medium
        v-if="variant === PaginationVariantEnum.medium && !disabled"
        v-model="page"
        v-bind="commonPaginationProps"
        :total-item="totalItem"
      />

      <pagination-large
        v-if="variant === PaginationVariantEnum.large"
        v-model="page"
        v-bind="commonPaginationProps"
        :total-item="totalItem"
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useVModel } from '@vueuse/core'
import { useLocale } from '@puik/hooks'
import { paginationProps, PaginationVariantEnum } from './pagination'

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
  (e: 'update:modelValue', value: number): void
}>()

const { t } = useLocale()

const page = useVModel(props, 'modelValue', emit)

const currentLabel = computed(() => {
  if (props.label) return props.label
  const path = `puik.pagination.${props.variant}.label`

  switch (props.variant) {
    case PaginationVariantEnum.mobile:
    case PaginationVariantEnum.small:
      return t(path, {
        page: page.value,
        maxPage: maxPage.value,
      })
    case PaginationVariantEnum.medium:
    case PaginationVariantEnum.large:
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
