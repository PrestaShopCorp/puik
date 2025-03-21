import type Switch from './switch.vue';

export interface SwitchProps {
  label?: string
  srLabel?: string
  labelRight?: string
  disabled?: boolean
  modelValue?: boolean | string
}

export type SwitchInstance = InstanceType<typeof Switch>;
