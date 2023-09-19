<template>
  <div
    :id="id"
    :class="[
      `puik-tag puik-tag--${variant}`,
      { 'puik-tag__disabled': disable },
    ]"
  >
    <PuikIcon v-if="icon && icon != ''" :icon="icon" />
    <span><slot></slot></span>
    <PuikIcon
      v-if="closeable"
      icon="close"
      class="puik-tag__close"
      @click="disable ? '' : handleCloseEvent()"
    />
  </div>
</template>

<script setup lang="ts">
import { PuikIcon } from '@puik/components/icon'
import { tagProps } from './tag'
defineOptions({
  name: 'PuikTag',
})

const props = defineProps(tagProps)
const emit = defineEmits(['close'])

const handleCloseEvent = () => {
  emit('close', props.id)
}
</script>
