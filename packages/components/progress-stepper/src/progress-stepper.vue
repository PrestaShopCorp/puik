<template>
  <div class="puik-progress-stepper">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue';
import {
  type ProgressStepperProps,
  progressStepperKey,
  type PuikStep
} from './progress-stepper';

defineOptions({
  name: 'PuikProgressStepper'
});

const props = defineProps<ProgressStepperProps>();
const emit: any = defineEmits<{(event: 'update:modelValue', step: PuikStep): void}>();
const steps = ref<PuikStep[]>([]);
const currentStep = computed<PuikStep>({
  get: () => props.modelValue,
  set: (step) => emit('update:modelValue', step)
});
const handleClickStep = (step: PuikStep) => {
  currentStep.value = step;
};
const currentStepIndex = computed(() =>
  steps.value.lastIndexOf(currentStep.value)
);
provide(progressStepperKey, {
  steps,
  handleClickStep,
  currentStep,
  currentStepIndex
});
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-progress-stepper.scss';
</style>
