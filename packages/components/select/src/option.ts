/* eslint-disable @typescript-eslint/member-delimiter-style */
import type Option from './option.vue';

export interface OptionType {
  [key: string]: any
}
export interface OptionProps {
  label?: string | number
  value?: string | number
  disabled?: boolean
  isSelected?: boolean
  multiSelect?: boolean
  dataTest?: string
}

export type OptionEmits = {
  'open': [state: boolean],
  'select': [payload: any]
};

export type OptionInstance = InstanceType<typeof Option>;
