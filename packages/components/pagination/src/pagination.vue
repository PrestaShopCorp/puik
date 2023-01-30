<template>
  <nav
    class="puik-pagination"
    :class="[`puik-pagination--${variant}`]"
    role="navigation"
    :aria-label="t('puik.pagination.ariaLabel')"
  >
    <span class="puik-pagination__description">
      {{ description }}
    </span>

    <PuikButton
      :aria-label="
        t('puik.pagination.goTo', { page: currentPagination.page - 1 })
      "
      :disabled="currentPagination.page === 1"
      class="puik-pagination__button puik-pagination__button--previous"
      left-icon="keyboard_arrow_left"
      variant="tertiary"
      @click="currentPagination.page -= 1"
    >
      <span v-if="variant === PaginationVariantEnum.large">
        {{ t('puik.pagination.previous') }}
      </span>
    </PuikButton>

    <div
      v-if="variant === PaginationVariantEnum.large"
      class="puik-pagination--large__container"
    >
      <PuikSelect
        v-model="currentPagination.itemPerPage"
        class="puik-pagination--large__select"
      >
        <PuikOption
          v-for="(item, index) in itemsPerPage"
          :key="`puik-pagination-large-item-${index}`"
          :value="item"
        >
          {{ item }}
        </PuikOption>
      </PuikSelect>

      <span class="puik-pagination--large__label">
        {{ t('puik.pagination.large.label', { maxPage }) }}
      </span>
    </div>

    <PuikButton
      :aria-label="
        t('puik.pagination.nextPage', { page: currentPagination.page + 1 })
      "
      :disabled="currentPagination.page === maxPage"
      class="puik-pagination__button puik-pagination__button--next"
      right-icon="keyboard_arrow_right"
      variant="tertiary"
      @click="currentPagination.page += 1"
    >
      <span v-if="variant === PaginationVariantEnum.large">
        {{ t('puik.pagination.next') }}
      </span>
    </PuikButton>
  </nav>
</template>

<script setup lang="ts">
import { computed, watch, reactive } from 'vue'
import { PuikButton, PuikIcon, PuikSelect, PuikOption } from '@puik/components'
import { useLocale } from '@puik/hooks'
import { paginationProps, PaginationVariantEnum } from './pagination'
import type { PaginationModel } from './pagination'

defineOptions({
  name: 'PuikPagination',
})

const props = defineProps(paginationProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: PaginationModel): void
}>()

const { t } = useLocale()

const currentPagination = reactive<PaginationModel>({
  page: props.modelValue.page,
  itemPerPage: props.modelValue.itemPerPage,
})

watch(props, () => {
  currentPagination.page = props.modelValue.page
})

watch(currentPagination, () => {
  emit('update:modelValue', currentPagination)
})

const description = computed(() => {
  if (props.variant === PaginationVariantEnum.small)
    return t('puik.pagination.small.description', {
      page: currentPagination.page,
      maxPage: props.maxPage,
    })

  if (props.variant === PaginationVariantEnum.large)
    return t('puik.pagination.large.description', {
      totalItem: props.totalItem,
    })

  return ''
})
</script>
