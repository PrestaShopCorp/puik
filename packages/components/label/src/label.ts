import type Label from './label.vue';

export interface LabelProps {
  for: string
  optional?: boolean
  required?: boolean
  readonly?: boolean
}

export type LabelInstance = InstanceType<typeof Label>;
