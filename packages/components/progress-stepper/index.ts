import { withInstall } from '@prestashopcorp/puik-utils'

import ProgressStepper from './src/progress-stepper.vue'
import ProgressStepperStep from './src/progress-stepper-step.vue'

export const PuikProgressStepper = withInstall(ProgressStepper)
export const PuikProgressStepperStep = withInstall(ProgressStepperStep)
export default PuikProgressStepper

export * from './src/progress-stepper'
export * from './src/progress-stepper-step'
