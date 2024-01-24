import type Radio from './radio.vue';

export interface RadioProps {
  label?: string
  name?: string
  disabled?: boolean
  modelValue: boolean | string | number
  value: boolean | string | number
  dataTest?: string
}

export type RadioInstance = InstanceType<typeof Radio>;
