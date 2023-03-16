<template>
  <div class="puik-input__controls">
    <button
      type="button"
      class="puik-input__controls__increment"
      :disabled="disabled"
      :aria-label="t('puik.input.increase')"
      @click="$emit('increase')"
    >
      <span class="puik-input__controls__increment__icon">arrow_drop_up</span>
    </button>
    <button
      type="button"
      class="puik-input__controls__decrement"
      :disabled="disabled"
      :aria-label="t('puik.input.decrease')"
      @click="$emit('decrease')"
    >
      <span class="puik-input__controls__decrement__icon">arrow_drop_down</span>
    </button>
  </div>
</template>
<script setup lang="ts">
import { useLocale } from '@prestashopcorp/puik-locale'
import { controlsEmits, controlsProps } from './controls'

const { t } = useLocale()
const props = defineProps(controlsProps)
const emit = defineEmits(controlsEmits)
</script>
