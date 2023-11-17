<template>
  <label
    class="puik-label"
    :for="props.for"
  >
    <slot />
    <span
      v-if="required"
      class="puik-label--required"
    >*</span>
    <span
      v-else-if="optional"
      class="puik-label--optional"
    >({{ t('puik.label.optional') }})</span>
    <span
      v-else-if="readonly"
      class="puik-label--readonly"
    >({{ t('puik.label.readonly') }})
    </span>
  </label>
</template>

<script setup lang="ts">
import { useLocale } from '@prestashopcorp/puik-locale';
import type { LabelProps } from './label';
defineOptions({
  name: 'PuikLabel'
});

const props = defineProps<LabelProps>();
const { t } = useLocale();
</script>
