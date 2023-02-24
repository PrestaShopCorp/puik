<template>
  <span class="puik-pagination__label">
    {{ label }}
  </span>

  <puik-button
    :disabled="disabled"
    variant="tertiary"
    class="puik-pagination__button puik-pagination__load-more-button"
    fluid
    @click="page += 1"
  >
    {{ currentButtonLabel }}
  </puik-button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useVModel } from '@vueuse/core'
import { PuikButton } from '@puik/components/button'
import { useLocale } from '@puik/hooks'
import { paginationLoaderProps } from './pagination-loader'
defineOptions({
  name: 'PuikPaginationLoader',
})

const props = defineProps(paginationLoaderProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const { t } = useLocale()

const page = useVModel(props, 'modelValue', emit)

const currentButtonLabel = computed(
  () => props.loaderButtonLabel ?? t('puik.pagination.loader.button')
)
</script>
