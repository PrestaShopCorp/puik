<template>
  <nav
    class="puik-pagination"
    :class="[`puik-pagination--${variant}`]"
    role="navigation"
    :aria-label="t('puik.pagination.ariaLabel')"
  >
    <slot name="label">
      <span class="puik-pagination__label">
        {{ label }}
      </span>
    </slot>

    <PuikButton
      v-if="variant !== PaginationVariantEnum.mobile"
      :aria-label="t('puik.pagination.goTo', { page: page - 1 })"
      :disabled="page === 1"
      class="puik-pagination__button puik-pagination__button--previous"
      left-icon="keyboard_arrow_left"
      variant="tertiary"
      @click="page -= 1"
    >
      <span v-if="variant === PaginationVariantEnum.large">
        {{ t('puik.pagination.previous') }}
      </span>
    </PuikButton>

    <PuikButton
      v-if="variant === PaginationVariantEnum.mobile"
      variant="tertiary"
      class="puik-pagination--mobile__button"
      fluid
      @click="$emit('load-more')"
    >
      {{ t('puik.pagination.mobile.button') }}
    </PuikButton>

    <div
      v-if="variant === PaginationVariantEnum.large"
      class="puik-pagination--large__container"
    >
      <PuikSelect
        v-model="page"
        :aria-label="t('puik.pagination.large.choosePage')"
        class="puik-pagination--large__select"
      >
        <PuikOption
          v-for="index in maxPage"
          :key="`puik-pagination-large-item-${index}`"
          :value="index"
        >
          {{ index }}
        </PuikOption>
      </PuikSelect>

      <span class="puik-pagination--large__max-page">
        {{ t('puik.pagination.large.maxPage', { maxPage: maxPage as number }) }}
      </span>
    </div>

    <PuikButton
      v-if="variant !== PaginationVariantEnum.mobile"
      :aria-label="t('puik.pagination.nextPage', { page: page + 1 })"
      :disabled="page === maxPage"
      class="puik-pagination__button puik-pagination__button--next"
      right-icon="keyboard_arrow_right"
      variant="tertiary"
      @click="page += 1"
    >
      <span v-if="variant === PaginationVariantEnum.large">
        {{ t('puik.pagination.next') }}
      </span>
    </PuikButton>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useVModel } from '@vueuse/core'
import { PuikButton, PuikSelect, PuikOption } from '@puik/components'
import { useLocale } from '@puik/hooks'
import { paginationProps, PaginationVariantEnum } from './pagination'
defineOptions({
  name: 'PuikPagination',
})

const props = defineProps(paginationProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'load-more'): void
}>()

const { t } = useLocale()

const page = useVModel(props, 'modelValue', emit)

const label = computed(() => {
  const path = `puik.pagination.${props.variant}.label`

  switch (props.variant) {
    case PaginationVariantEnum.small:
      return t(path, {
        page: page.value,
        maxPage: props.maxPage as number,
      })
    case PaginationVariantEnum.medium:
      return t(path, {})
    case PaginationVariantEnum.large:
      return t(path, {
        totalItem: props.totalItem,
      })
    default:
      return t(path, {
        itemCount: props.itemCount as number,
        totalItem: props.totalItem,
      })
  }
})
</script>
