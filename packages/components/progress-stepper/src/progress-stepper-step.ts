import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type ProgressStepperStep from './progress-stepper-step.vue'

export const progressStepperStepProps = buildProps({
  step: {
    type: [String, Number],
    required: true,
  },
  dataTest: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type ProgressStepperStepProps = ExtractPropTypes<
  typeof progressStepperStepProps
>

export type ProgressStepperStepInstance = InstanceType<
  typeof ProgressStepperStep
>
