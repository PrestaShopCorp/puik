import '../style';
import type { ComputedRef, InjectionKey, Ref, WritableComputedRef } from 'vue';
import type ProgressStepper from './progress-stepper.vue';

export interface ProgressStepperProps {
  modelValue: string | number
}

export type ProgressStepperInstance = InstanceType<typeof ProgressStepper>;

export type PuikStep = string | number;

export type ProgressStepperContext = {
  steps: Ref<PuikStep[]>
  handleClickStep: (step: PuikStep) => void
  currentStep: WritableComputedRef<PuikStep>
  currentStepIndex: ComputedRef<number>
};

export const progressStepperKey: InjectionKey<ProgressStepperContext> =
  Symbol('progress-stepper');
