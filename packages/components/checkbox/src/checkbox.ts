import type Checkbox from './checkbox.vue';

export interface CheckboxProps {
  modelValue: boolean
  label?: string
  disabled?: boolean
  indeterminate?: boolean
  dataTest?: string
}

export type CheckboxInstance = InstanceType<typeof Checkbox>;
