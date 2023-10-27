<template>
  <div class="puik-progress-stepper-step">
    <puik-button
      :aria-current="isCurrentStep ? 'step' : undefined"
      :aria-label="step"
      :disabled="disabled"
      :left-icon="isCompleted ? 'check' : undefined"
      :variant="buttonVariant"
      aria-live="polite"
      class="puik-progress-stepper-step__button"
      size="sm"
      :button-data-test="stepButtonDataTest"
      @click="onClick"
    >
      <template v-if="!isCompleted">
        {{ step }}
      </template>
    </puik-button>
    <span class="puik-progress-stepper-step__text" :data-test="textDataTest">
      <slot name="text"></slot>
    </span>
    <span
      class="puik-progress-stepper-step__additional-text"
      :data-test="additionalTextDataTest"
    >
      <slot name="additional-text"></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { PuikButton } from '@puik/components/button'
import { progressStepperStepProps } from './progress-stepper-step'
import { progressStepperKey, type PuikStep } from './progress-stepper'

defineOptions({
  name: 'PuikProgressStepperStep',
})

const props = defineProps(progressStepperStepProps)
const emit = defineEmits<{
  (e: 'click', step: PuikStep): void
}>()
const progressStepper = inject(progressStepperKey, null)
progressStepper?.steps?.value.push(props.step)

const isCurrentStep = computed(() => {
  return props.step === progressStepper?.currentStep.value
})

const buttonVariant = computed(() => {
  if (isCompleted.value) return 'success'
  return 'primary'
})

const stepIndex = computed(() => {
  if (!progressStepper) return -1
  return progressStepper.steps.value.lastIndexOf(props.step)
})

const disabled = computed(() => {
  if (!progressStepper) return true
  return stepIndex.value > progressStepper.currentStepIndex.value
})

const isCompleted = computed(() => {
  if (!progressStepper) return true
  return stepIndex.value < progressStepper.currentStepIndex.value
})

const onClick = () => {
  progressStepper?.handleClickStep(props.step)
  emit('click', props.step)
}
</script>
