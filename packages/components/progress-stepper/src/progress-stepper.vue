<template>
  <div class="puik-progress-stepper">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { progressStepperProps } from './progress-stepper'
defineOptions({
  name: 'PuikProgressStepper',
})

const props = defineProps(progressStepperProps)
const emit = defineEmits<{
  (event: 'update:modelValue', step: string | number): void
}>()
const steps = ref([])
const handleClickStep = (step: string | number) => {
  emit('update:modelValue', step)
}
provide('puik-progress-stepper', {
  steps,
  handleClickStep,
  currentStep: props.modelValue,
})
</script>
