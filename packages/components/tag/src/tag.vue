<template>
  <div
    :id="id"
    :class="[
      `puik-tag puik-tag--${variant}`,
      { 'puik-tag__disabled': disabled },
    ]"
  >
    <PuikIcon v-if="icon && icon != ''" :icon="icon" />
    <span class="puik-tag__content">
      <slot></slot>
    </span>
    <PuikIcon
      v-if="closeable"
      icon="close"
      class="puik-tag__close"
      @click="disabled ? '' : handleCloseEvent()"
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
