<template>
  <div class="puik-button-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import { useVModel } from '@vueuse/core'
import { buttonGroupProps, ButtonGroupKey } from './button-group'

defineOptions({
  name: 'PuikButtonGroup',
})

const props = defineProps(buttonGroupProps)
const selected = useVModel(props, 'modelValue')

provide(ButtonGroupKey, { selected })
</script>
