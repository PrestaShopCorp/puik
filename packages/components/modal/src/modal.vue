<template>
  <Teleport to="body" :disabled="!appendToBody">
    <template v-if="visible">
      <puik-overlay>
        <div class="puik-modal" :class="customClass" :style="customStyle">
          <div class="puik-modal_header">
            <slot name="header">
              <h3 class="puik-modal_title">{{ props.title }}</h3>
            </slot>
            <span v-if="showClose" class="puik-modal_close" @click="closeSelf">
              X
            </span>
          </div>

          <div
            :style="[
              props.center ? { textAlign: 'center' } : { textAlign: 'left' },
            ]"
          >
            <slot name="default" />
          </div>
          <slot name="footer" />
        </div>
      </puik-overlay>
    </template>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import PuikOverlay from '../../overlay/index'
import { modalEmits, modalProps } from './modal'
import type { CSSProperties } from '@vue/runtime-dom'

defineOptions({
  name: 'PuikModal',
})

const props = defineProps(modalProps)
const visible = ref(false)

const customStyle = computed<CSSProperties>(() => ({
  top: props.top,
  width: props.width,
}))

onMounted(() => {
  if (props.modelValue) {
    visible.value = true
  }
})

watch(
  () => props.modelValue,
  (value) => {
    visible.value = value
  }
)

const emits = defineEmits(modalEmits)

const closeSelf = () => {
  visible.value = false
  emits('update:modelValue', false)
}
</script>
