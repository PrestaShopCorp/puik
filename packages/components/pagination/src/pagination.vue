<template>
  <nav
    class="puik-pagination"
    :class="[`puik-pagination--${variant}`]"
    role="navigation"
    :aria-label="t('puik.pagination.ariaLabel')"
  >
    <span v-if="totalItem !== 0" class="puik-pagination__label">
      {{ computedLabel }}
    </span>

    <puik-button
      v-if="variant === PaginationVariantEnum.mobile"
      variant="tertiary"
      class="puik-pagination--mobile__load-more-button puik-pagination__button"
      fluid
      @click="page += 1"
    >
      {{ mobileButtonLabelComputed }}
    </puik-button>

    <div v-else class="puik-pagination__content">
      <puik-button
        :aria-label="t('puik.pagination.previous', { page: page - 1 })"
        :disabled="page === 1 || totalItem === 0"
        class="puik-pagination__previous-button puik-pagination__button"
        left-icon="keyboard_arrow_left"
        variant="tertiary"
        @click="page -= 1"
      >
        <span
          v-if="variant === PaginationVariantEnum.large"
          class="puik-pagination__previous-button-text"
        >
          {{ t('puik.pagination.previous') }}
        </span>
      </puik-button>

      <ul
        v-if="variant === PaginationVariantEnum.medium"
        class="puik-pagination__pager"
      >
        <li class="puik-pagination__pager-item">
          <puik-button
            :aria-current="page === 1"
            :aria-label="t('puik.pagination.goTo', { page: 1 })"
            :disabled="totalItem === 0"
            :class="{
              'puik-pagination__button--active': page === 1,
            }"
            class="puik-pagination__button puik-pagination__pager-button"
            variant="tertiary"
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
          </puik-button>
        </li>

        <li
          v-if="pager[pager.length - 1] !== maxPage - 1"
          class="puik-pagination__pager-item"
          aria-hidden="true"
        >
          <span class="puik-pagination__pager-separator"> &hellip; </span>
        </li>

        <li class="puik-pagination__pager-item">
          <puik-button
            :aria-current="page === maxPage"
            :aria-label="t('puik.pagination.goTo', { page: maxPage })"
            :disabled="totalItem === 0"
            :class="{
              'puik-pagination__button--active': page === maxPage,
            }"
            class="puik-pagination__button puik-pagination__pager-button"
            variant="tertiary"
            @click="page = maxPage"
          >
            {{ maxPage }}
          </puik-button>
        </li>
      </ul>

      <div
        v-if="variant === PaginationVariantEnum.large"
        class="puik-pagination__select-container"
      >
        <puik-select
          v-model="page"
          :disabled="totalItem === 0"
          :aria-label="t('puik.pagination.large.choosePage')"
          class="puik-pagination__select"
        >
          <puik-option
            v-for="index in maxPage"
            :key="`puik-pagination-large-option-${index}`"
            :value="index"
          >
            {{ index }}
          </puik-option>
        </puik-select>

        <span class="puik-pagination__select-max-page">
          {{ t('puik.pagination.large.maxPage', { maxPage }) }}
        </span>
      </div>

      <puik-button
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
          class="puik-pagination__next-button-text"
        >
          {{ t('puik.pagination.next') }}
        </span>
      </puik-button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useVModel } from '@vueuse/core'
import { PuikSelect, PuikOption } from '@puik/components/select'
import { PuikButton } from '@puik/components/button'
import { useLocale } from '@puik/hooks'
import { paginationProps, PaginationVariantEnum } from './pagination'
defineOptions({
  name: 'PuikPagination',
})

const props = defineProps(paginationProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const { t } = useLocale()

const page = useVModel(props, 'modelValue', emit)

const computedLabel = computed(() => {
  if (props.label) return props.label
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

const mobileButtonLabelComputed = computed(
  () => props.mobileButtonLabel ?? t('puik.pagination.mobile.button')
)

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
