<template>
  <span class="puik-badge" :class="['puik-badge--' + type]">
    <slot></slot>
    <transition name="puik-zoom-center">
      <sup v-show="!hidden && (content || content === '0')" v-text="content" class="puik-badge__content">
      </sup>
    </transition>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { badgeProps } from './badge'

export default defineComponent({
  name: 'PuikBadge',
  props: badgeProps,
  setup(props) {
    const content = computed(() => {
      if(typeof props.value === 'number') {
        return props.max < props.value ? `${props.max}+` : `${props.value}`;
      }
      return `${props.value}`
    })

    return {
      content
    }
  },
})
</script>
