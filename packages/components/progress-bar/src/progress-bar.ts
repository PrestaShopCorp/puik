import { buildProps } from '@prestashopcorp/puik-utils'
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
} as const)

export type ProgressBarProps = ExtractPropTypes<typeof progressBarProps>

export type ProgressBarInstance = InstanceType<typeof ProgressBar>
