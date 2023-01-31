<template>
  <nav
    class="puik-pagination"
    :class="[`puik-pagination--${variant}`]"
    role="navigation"
    :aria-label="t('puik.pagination.ariaLabel')"
  >
    <slot name="label">
      <span v-if="totalItem !== 0" class="puik-pagination__label">
        {{ label }}
      </span>
    </slot>

    <PuikButton
      v-if="variant === PaginationVariantEnum.mobile"
      variant="tertiary"
      class="puik-pagination__load-more-button puik-pagination__button"
      fluid
      @click="page += 1"
    >
      {{ t('puik.pagination.mobile.button') }}
    </PuikButton>

    <div v-else class="puik-pagination--medium__container">
      <PuikButton
        :aria-label="t('puik.pagination.previous', { page: page - 1 })"
        :disabled="page === 1 || totalItem === 0"
        class="puik-pagination__previous-button puik-pagination__button"
        left-icon="keyboard_arrow_left"
        variant="tertiary"
        @click="page -= 1"
      >
        <span
          v-if="variant === PaginationVariantEnum.large"
          class="puik-pagination__button-label"
        >
          {{ t('puik.pagination.previous') }}
        </span>
      </PuikButton>

      <ul
        v-if="variant === PaginationVariantEnum.medium"
        class="puik-pagination__pager"
      >
        <li class="puik-pagination__pager-item">
          <PuikButton
            :aria-label="t('puik.pagination.goTo', { page: 1 })"
            :disabled="totalItem === 0"
            variant="tertiary"
            class="puik-pagination__button puik-pagination__pager-button"
            @click="page = 1"
          >
            1
          </PuikButton>
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
          <PuikButton
            :disabled="totalItem === 0"
            :aria-label="t('puik.pagination.goTo', { page: item })"
            :class="{
              'puik-pagination__button--active': page === item,
            }"
            variant="tertiary"
            class="puik-pagination__button puik-pagination__pager-button"
            :aria-current="page === item"
            @click="page = item"
          >
            {{ item }}
          </PuikButton>
        </li>

        <li
          v-if="pager[pager.length - 1] !== maxPage - 1"
          class="puik-pagination__pager-item"
          aria-hidden="true"
        >
          <span class="puik-pagination__pager-separator"> &hellip; </span>
        </li>

        <li class="puik-pagination__pager-item">
          <PuikButton
            :aria-label="t('puik.pagination.goTo', { page: maxPage })"
            :disabled="totalItem === 0"
            variant="tertiary"
            class="puik-pagination__button puik-pagination__pager-button"
            @click="page = maxPage"
          >
            {{ maxPage }}
          </PuikButton>
        </li>
      </ul>

      <div
        v-if="variant === PaginationVariantEnum.large"
        class="puik-pagination--large__container"
      >
        <PuikSelect
          v-model="page"
          :disabled="totalItem === 0"
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
          {{ t('puik.pagination.large.maxPage', { maxPage }) }}
        </span>
      </div>

      <PuikButton
        v-if="variant !== PaginationVariantEnum.mobile"
        :aria-label="t('puik.pagination.next', { page: page + 1 })"
        :disabled="page === maxPage || totalItem === 0"
        class="puik-pagination__button puik-pagination__next-button"
        right-icon="keyboard_arrow_right"
        variant="tertiary"
        @click="page += 1"
      >
        <span
          v-if="variant === PaginationVariantEnum.large"
          class="puik-pagination__button-label"
        >
          {{ t('puik.pagination.next') }}
        </span>
      </PuikButton>
    </div>
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
  (e: 'load-more', page): void
}>()

const { t } = useLocale()

const page = useVModel(props, 'modelValue', emit)

const label = computed(() => {
  const path = `puik.pagination.${props.variant}.label`

  switch (props.variant) {
    case PaginationVariantEnum.small:
      return t(path, {
        page: page.value,
        maxPage: props.maxPage,
      })
    case PaginationVariantEnum.medium:
      return t(path, {
        totalItem: props.totalItem,
      })
    case PaginationVariantEnum.large:
      return t(path, {
        totalItem: props.totalItem,
      })
    default:
      return t(path, {
        itemCount: props?.itemCount,
        totalItem: props.totalItem,
      })
  }
})

const pager = computed(() => {
  const maxPagesDisplayed = 5
  const halfPagesDisplayed = 2
  const pages: number[] = []
  let startPage: number

  if (page.value - halfPagesDisplayed <= 1) startPage = 2
  else if (page.value + halfPagesDisplayed > props.maxPage)
    startPage = props.maxPage - maxPagesDisplayed
  else startPage = page.value - halfPagesDisplayed

  pages.push(startPage)

  for (
    let i = startPage + 1;
    i < props.maxPage && i < startPage + maxPagesDisplayed;
    i++
  ) {
    pages.push(i)
  }

  if (pages[pages.length - 1] + 1 === props.maxPage - 1)
    pages.push(pages[pages.length - 1] + 1)

  return pages
})
</script>
