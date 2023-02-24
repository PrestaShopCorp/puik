<template>
  <div class="puik-button-group">
    <!-- <slot /> -->
    <puik-button
      v-for="(button_item, key) in buttons_list"
      :key="key"
      :variant="button_item.variant"
    >
      {{ button_item.label }}
    </puik-button>
  </div>
</template>

<script setup lang="ts">
import { PuikButton } from '@puik/components'
import { buttonGroupProps } from './button-group'

defineOptions({
  name: 'PuikButtonGroup',
})

// onMounted(() => {
// });
</script>
