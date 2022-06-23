<template>
  <div class="puik-radio__group">
    <input
      v-model="value"
      class="puik-radio"
      type="radio"
      :name="name"
      :checked="checked"
    />
    <label v-if="$slots.default || label" class="puik-radio__label">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '@puik/hooks'
import { radioEmits, radioProps } from './radio'

defineOptions({
  name: 'Radio',
})
const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)
const { t } = useLocale()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value: boolean) {
    emit('update:modelValue', value)
  },
})
</script>
