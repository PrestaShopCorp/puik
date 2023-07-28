<template>
  <div class="puik-progress-stepper-step">
    <puik-button
      class="puik-progress-stepper-step__button"
      :variant="buttonVariant"
      :disabled="disabled"
      :left-icon="isVariantSuccess ? 'check' : undefined"
      @click="progressStepper.handleClickStep(step)"
    >
      <template v-if="!isVariantSuccess">
        {{ step }}
      </template>
    </puik-button>
    <span class="puik-progress-stepper-step__text">
      <slot name="text"></slot>
    </span>
    <span class="puik-progress-stepper-step__additional-text">
      <slot name="additional-text"></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { PuikButton } from '@puik/components'
import { progressStepperStepProps } from './progress-stepper-step'

defineOptions({
  name: 'PuikProgressStepperStep',
})

const props = defineProps(progressStepperStepProps)
const progressStepper = inject('puik-progress-stepper', null)
progressStepper.steps.value.push(props.step)

const isVariantSuccess = computed(() => {
  return props.step === progressStepper.currentStep
})
const buttonVariant = computed(() => {
  if (isVariantSuccess.value) return 'success'
  return 'primary'
})
</script>
