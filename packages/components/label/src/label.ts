import '../style';
import type Label from './label.vue';

export interface LabelProps {
  for: string
  optional?: boolean
  required?: boolean
  readonly?: boolean
  dataTest?: string
}

export type LabelInstance = InstanceType<typeof Label>;
