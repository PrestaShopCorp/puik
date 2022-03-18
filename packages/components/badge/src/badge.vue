<template>
  <span class="puik-badge" :class="['puik-badge--' + type]">
    <slot></slot>
    <transition name="puik-zoom-center">
      <sup
        v-show="!hidden && (content || content === '0')"
        class="puik-badge__content"
        v-text="content"
      >
      </sup>
    </transition>
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { badgeProps } from './badge'

defineOptions({
  name: 'PuikBadge',
})
const props = defineProps(badgeProps)

const content = computed(() => {
  if (typeof props.value === 'number') {
    return props.max < props.value ? `${props.max}+` : `${props.value}`
  }
  return `${props.value}`
})
</script>
