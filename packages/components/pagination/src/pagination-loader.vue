<template>
  <span class="puik-pagination__label">
    {{ label }}
  </span>

  <puik-button
    :disabled="disabled"
    variant="tertiary"
    class="puik-pagination__button puik-pagination__load-more-button"
    fluid
    @click="$emit('update:modelValue', modelValue + 1)"
  >
    {{ currentButtonLabel }}
  </puik-button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PuikButton } from '@puik/components/button'
import { useLocale } from '@puik/hooks'
import { paginationLoaderProps } from './pagination-loader'
defineOptions({
  name: 'PuikPaginationLoader',
})

const props = defineProps(paginationLoaderProps)
defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const { t } = useLocale()

const currentButtonLabel = computed(
  () => props.loaderButtonLabel ?? t('puik.pagination.loader.button')
)
</script>
