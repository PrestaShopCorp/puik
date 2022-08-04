<template>
  visible: {{ visible }}
  <div v-if="visible" class="puik-modal" :style="customStyle">
    <div class="puik-modal_header">
      <slot name="header">
        <h3 class="puik-modal_title">{{ props.title }}</h3>
      </slot>
      <span class="puik-modal_close" @click="closeSelf">X</span>
    </div>

    <slot name="content" />
    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
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
  textAlign: props.center ? 'center' : 'left',
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
