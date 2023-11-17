import type ProgressStepperStep from './progress-stepper-step.vue';

export interface ProgressStepperStepProps {
  step: string | number
}

export type ProgressStepperStepInstance = InstanceType<
  typeof ProgressStepperStep
>;
