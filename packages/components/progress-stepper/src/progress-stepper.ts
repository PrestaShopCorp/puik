import { buildProps } from '@puik/utils'
import type {
  ComputedRef,
  ExtractPropTypes,
  InjectionKey,
  Ref,
  WritableComputedRef,
} from 'vue'
import type ProgressStepper from './progress-stepper.vue'

export type PuikStep = string | number

export const progressStepperProps = buildProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
} as const)

export type ProgressStepperProps = ExtractPropTypes<typeof progressStepperProps>

export type ProgressStepperInstance = InstanceType<typeof ProgressStepper>

export type ProgressStepperContext = {
  steps: Ref<PuikStep[]>
  handleClickStep: (step: PuikStep) => void
  currentStep: WritableComputedRef<PuikStep>
  currentStepIndex: ComputedRef<number>
}

export const progressStepperKey: InjectionKey<ProgressStepperContext> =
  Symbol('progress-stepper')
