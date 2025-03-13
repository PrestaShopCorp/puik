import '../style';
import type ProgressBar from './progress-bar.vue';

export interface ProgressBarProps {
  percentage: number | string
  barClass?: string
  dataTest?: string
}

export type ProgressBarInstance = InstanceType<typeof ProgressBar>;
