<template>
  <nav
    class="puik-pagination"
    :class="[`puik-pagination--${variant}`]"
    role="navigation"
    :aria-label="t('puik.pagination.ariaLabel')"
  >
    <span class="puik-pagination__description">
      {{ t(labelTranslationPath, { page: currentPagination.page, maxPage }) }}
    </span>

    <PuikButton
      class="puik-pagination__button puik-pagination__button--previous"
      variant="tertiary"
      :disabled="currentPagination.page === 1"
      :aria-label="
        t('puik.pagination.goTo', { page: currentPagination.page - 1 })
      "
      @click="currentPagination.page -= 1"
    >
      <PuikIcon icon="keyboard_arrow_left" />
    </PuikButton>

    <PuikButton
      class="puik-pagination__button puik-pagination__button--next"
      variant="tertiary"
      :disabled="currentPagination.page === maxPage"
      :aria-label="
        t('puik.pagination.nextPage', { page: currentPagination.page + 1 })
      "
      @click="currentPagination.page += 1"
    >
      <PuikIcon icon="keyboard_arrow_right" />
    </PuikButton>
  </nav>
</template>

<script setup lang="ts">
import { computed, watch, reactive } from 'vue'
import { PuikButton, PuikIcon } from '@puik/components'
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

const labelTranslationPath = computed(() => {
  if (props.variant === PaginationVariantEnum.small)
    return 'puik.pagination.small.label'
  return ''
})
</script>
