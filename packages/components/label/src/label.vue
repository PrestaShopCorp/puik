<template>
  <label class="puik-label" :for="props.for">
    <slot></slot>
    <span v-if="required" class="puik-label--required">*</span>
    <span v-else-if="optional" class="puik-label--optional"
      >({{ t('puik.label.optional') }})</span
    >
  </label>
</template>

<script setup lang="ts">
import { useLocale } from '@puik/hooks'
import { labelProps } from './label'

const props = defineProps(labelProps)
const { t } = useLocale()
</script>
