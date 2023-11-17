import type ProgressBar from './progress-bar.vue';

export interface ProgressBarProps {
  percentage: number | string
  barClass?: string
}

export type ProgressBarInstance = InstanceType<typeof ProgressBar>;
