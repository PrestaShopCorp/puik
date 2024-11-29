import '@prestashopcorp/puik-components/option/style/css';
import type Option from './option.vue';

export interface OptionType {
  [key: string]: any
}
export interface OptionProps {
  label?: string | number
  value?: string | number | Record<string, any>
  disabled?: boolean
  isSelected?: boolean
  multiSelect?: boolean
  dataTest?: string
}

export type OptionEmits = {
  'open': [state: boolean]
  'select': [payload: any]
};

export type OptionInstance = InstanceType<typeof Option>;
