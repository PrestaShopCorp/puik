import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type ProgressBar from './progress-bar.vue'

export const progressBarProps = buildProps({
  percentage: {
    type: [Number, String],
    required: true,
  },
  barClass: {
    type: String,
    default: '',
  },
  dataTest: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type ProgressBarProps = ExtractPropTypes<typeof progressBarProps>

export type ProgressBarInstance = InstanceType<typeof ProgressBar>
