<template>
  <div
    class="puik-progress-stepper-step"
    :data-test="dataTest"
  >
    <puik-button
      :aria-current="isCurrentStep ? 'step' : undefined"
      :aria-label="`${step}`"
      :disabled="disabled"
      :left-icon="isCompleted ? 'check' : undefined"
      :variant="buttonVariant"
      aria-live="polite"
      class="puik-progress-stepper-step__button"
      size="sm"
      :data-test="dataTest != undefined ? `stepButton-${dataTest}` : undefined"
      @click="onClick"
    >
      <template v-if="!isCompleted">
        {{ step }}
      </template>
    </puik-button>
    <span
      class="puik-progress-stepper-step__text"
      :data-test="dataTest != undefined ? `text-${dataTest}` : undefined"
    >
      <slot name="text" />
    </span>
    <span
      class="puik-progress-stepper-step__additional-text"
      :data-test="
        dataTest != undefined ? `additionalText-${dataTest}` : undefined
      "
    >
      <slot name="additional-text" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import { PuikButton } from '@prestashopcorp/puik-components/button';
import { type ProgressStepperStepProps } from './progress-stepper-step';
import { progressStepperKey, type PuikStep } from './progress-stepper';

defineOptions({
  name: 'PuikProgressStepperStep'
});

const props = defineProps<ProgressStepperStepProps>();
const emit = defineEmits<{
  click: [step: PuikStep]
}>();
const progressStepper = inject(progressStepperKey, null);
progressStepper?.steps?.value.push(props.step);

const isCurrentStep = computed(() => {
  return props.step === progressStepper?.currentStep.value;
});

const stepIndex = computed(() => {
  if (!progressStepper) return -1;
  return progressStepper.steps.value.lastIndexOf(props.step);
});

const disabled = computed(() => {
  if (!progressStepper) return true;
  return stepIndex.value > progressStepper.currentStepIndex.value;
});

const isCompleted = computed(() => {
  if (!progressStepper) return true;
  return stepIndex.value < progressStepper.currentStepIndex.value;
});

const buttonVariant = computed(() => {
  if (isCompleted.value) return 'success';
  return 'primary';
});

const onClick = () => {
  progressStepper?.handleClickStep(props.step);
  emit('click', props.step);
};
</script>

<style lang="css">
@import '../../progress-stepper-step/style/index.css';
</style>
