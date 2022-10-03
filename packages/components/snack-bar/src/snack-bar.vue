<template>
  <transition
    enter-from-class="puik-snack-bar__transition--enter-from"
    leave-to-class="puik-snack-bar__transition--leave-to"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="visible"
      class="puik-snack-bar"
      :class="variant ? `puik-snack-bar--${variant}` : ''"
      :style="position"
      @mouseenter="resetTimer"
      @mouseleave="startTimer"
    >
      <span class="puik-snack-bar__text">{{ text }}</span>
      <button
        v-if="action"
        class="puik-snack-bar__action"
        @click="action?.callback"
      >
        {{ action.label }}
      </button>
      <button class="puik-snack-bar__close-button" @click="close">close</button>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useTimeoutFn, useEventListener } from '@vueuse/core'
import { snackBarProps } from './snack-bar'
import type { CSSProperties } from 'vue'
defineOptions({
  name: 'PuikSnackBar',
})
let timer: (() => void) | undefined

const visible = ref(false)

const props = defineProps(snackBarProps)

const position = computed<CSSProperties>(() => ({
  bottom: `${props.offset}px`,
}))

const startTimer = () => {
  if (props.duration > 0) {
    ;({ stop: timer } = useTimeoutFn(() => {
      close()
    }, props.duration))
  }
}

const resetTimer = () => timer?.()

const close = () => {
  visible.value = false
}

const onKeyDown = ({ code }: KeyboardEvent) => {
  if (code === 'Escape') {
    if (visible.value) {
      close()
    }
  }
}

useEventListener(document, 'keydown', onKeyDown)

onMounted(() => {
  startTimer()
  visible.value = true
})
</script>
