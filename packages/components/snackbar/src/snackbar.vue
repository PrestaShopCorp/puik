<template>
  <transition
    enter-from-class="puik-snackbar__transition--enter-from"
    leave-to-class="puik-snackbar__transition--leave-to"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="visible"
      :id="props.id"
      class="puik-snackbar"
      :class="`puik-snackbar--${variant}`"
      :style="position"
      role="status"
      aria-live="polite"
      @mouseenter="resetTimer"
      @mouseleave="startTimer"
    >
      <span class="puik-snackbar__text">{{ text }}</span>
      <button
        v-if="action"
        class="puik-snackbar__action"
        @click="action?.callback"
      >
        {{ action.label }}
      </button>
      <button
        v-if="hasCloseButton"
        class="puik-snackbar__close-button"
        :aria-label="t('puik.snackbar.closeBtnLabel')"
        @click="close"
      >
        close
      </button>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useTimeoutFn, useEventListener } from '@vueuse/core'
import { useLocale } from '@puik/locale'
import { snackbarProps } from './snackbar'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'PuikSnackbar',
})

const { t } = useLocale()
let timer: (() => void) | undefined

const visible = ref(false)

const props = defineProps(snackbarProps)

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
