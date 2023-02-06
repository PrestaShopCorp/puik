<template>
  <nav
    class="puik-pagination"
    :class="[`puik-pagination--${variant}`]"
    role="navigation"
    :aria-label="t('puik.pagination.ariaLabel')"
  >
    <span
      v-if="variant !== PaginationVariantEnum.mobile"
      class="puik-pagination__label"
    >
      {{ computedLabel }}
    </span>

    <puik-button
      v-if="variant === PaginationVariantEnum.loader"
      :disabled="page >= maxPage || disabled"
      variant="tertiary"
      class="puik-pagination__button puik-pagination__load-more-button"
      fluid
      @click="page += 1"
    >
      {{ loaderButtonLabelComputed }}
    </puik-button>

    <div v-else class="puik-pagination__content">
      <puik-button
        :aria-label="t('puik.pagination.previous', { page: page - 1 })"
        :disabled="page <= 1 || disabled"
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

      <span
        v-if="variant === PaginationVariantEnum.mobile"
        class="puik-pagination__label"
      >
        {{ computedLabel }}
      </span>

      <ul
        v-if="variant === PaginationVariantEnum.medium && !disabled"
        class="puik-pagination__pager"
      >
        <li class="puik-pagination__pager-item">
          <puik-button
            :aria-current="page === 1"
            :aria-label="t('puik.pagination.goTo', { page: 1 })"
            :class="{
              'puik-pagination__pager-button--active': page === 1,
            }"
            class="puik-pagination__button puik-pagination__pager-button"
            variant="text"
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
            :class="{
              'puik-pagination__pager-button--active': page === item,
            }"
            variant="text"
            class="puik-pagination__button puik-pagination__pager-button"
            :aria-current="page === item"
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

        <li v-if="maxPage >= 2" class="puik-pagination__pager-item">
          <puik-button
            :aria-current="page === maxPage"
            :aria-label="t('puik.pagination.goTo', { page: maxPage })"
            :class="{
              'puik-pagination__pager-button--active': page === maxPage,
            }"
            class="puik-pagination__button puik-pagination__pager-button"
            variant="text"
            @click="page = maxPage"
          >
            {{ maxPage }}
          </puik-button>
        </li>
      </ul>

      <div
        v-if="variant === PaginationVariantEnum.large"
        class="puik-pagination__jumper"
      >
        <puik-select
          v-model="page"
          :aria-label="t('puik.pagination.large.choosePage')"
          :disabled="disabled"
          class="puik-pagination__select"
        >
          <puik-option
            v-for="index in maxPage"
            :key="`puik-pagination-option-${index}`"
            :value="index"
          >
            {{ index }}
          </puik-option>
        </puik-select>

        <span class="puik-pagination__jumper-description">
          {{ t('puik.pagination.large.jumperDescription', { maxPage }) }}
        </span>
      </div>

      <puik-button
        v-if="variant !== PaginationVariantEnum.loader"
        :aria-label="t('puik.pagination.next', { page: page + 1 })"
        :disabled="page >= maxPage || disabled"
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
    case PaginationVariantEnum.mobile:
    case PaginationVariantEnum.small:
      return t(path, {
        page: page.value,
        maxPage: props.maxPage,
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

const loaderButtonLabelComputed = computed(
  () => props.loaderButtonLabel ?? t('puik.pagination.loader.button')
)

const disabled = computed(() => !props.totalItem || !props.maxPage)

const pager = computed(() => {
  if (props.maxPage <= 2) return []

  const maxPagesDisplayed = page.value <= 3 ? 4 : 5
  const halfPagesDisplayed = 2
  const pages: number[] = []
  let startPage: number

  if (page.value - halfPagesDisplayed <= 1) startPage = 2
  else if (page.value + halfPagesDisplayed > props.maxPage)
    if (props.maxPage - maxPagesDisplayed <= 1) startPage = 2
    else startPage = props.maxPage - maxPagesDisplayed + 1
  else startPage = page.value - halfPagesDisplayed

  pages.push(startPage)

  for (
    let i = startPage + 1;
    i < props.maxPage && i < startPage + maxPagesDisplayed;
    i++
  ) {
    pages.push(i)
  }

  return pages
})
</script>
