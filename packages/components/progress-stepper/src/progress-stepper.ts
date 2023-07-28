import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type ProgressStepper from './progress-stepper.vue'

export const progressStepperProps = buildProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
} as const)

export type ProgressStepperProps = ExtractPropTypes<typeof progressStepperProps>

export type ProgressStepperInstance = InstanceType<typeof ProgressStepper>
