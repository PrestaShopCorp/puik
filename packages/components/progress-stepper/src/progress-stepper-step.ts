import type ProgressStepperStep from './progress-stepper-step.vue';

export interface ProgressStepperStepProps {
  step: string | number
  dataTest?: string
}

export type ProgressStepperStepInstance = InstanceType<
  typeof ProgressStepperStep
>;
