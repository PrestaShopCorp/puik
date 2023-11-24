<template>
  <span class="puik-pagination__label">
    {{ label }}
  </span>

  <puik-button
    :disabled="disabled"
    variant="tertiary"
    class="puik-pagination__button puik-pagination__load-more-button"
    fluid
    :data-test="
      dataTest != undefined ? `loadMoreButton-${dataTest}` : undefined
    "
    @click="$emit('update:modelValue', modelValue + 1)"
  >
    {{ currentButtonLabel }}
  </puik-button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PuikButton } from '@prestashopcorp/puik-components/button';
import { useLocale } from '@prestashopcorp/puik-locale';
import { type PaginationLoaderProps } from './pagination-loader';
defineOptions({
  name: 'PuikPaginationLoader'
});

const props = withDefaults(defineProps<PaginationLoaderProps>(), {
  modelValue: 1
});

defineEmits<{
  'update:modelValue': [value: number]
}>();

const { t } = useLocale();

const currentButtonLabel = computed(
  () => props.loaderButtonLabel ?? t('puik.pagination.loader.button')
);
</script>
