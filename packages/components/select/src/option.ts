import '@prestashopcorp/puik-components/option/style/css';
import type Option from './option.vue';

export interface OptionType {
  [key: string]: any
}
export interface OptionProps {
  option?: OptionType
  label?: string | number
  value?: string | number | Record<string, any>
  labelKey?: string
  valueKey?: string
  disabledKey?: string
  disabled?: boolean
  isSelected?: boolean
  multiSelect?: boolean
}

export type OptionEmits = {
  'select': [payload: OptionType]
  'close': [state: boolean]
};

export type OptionInstance = InstanceType<typeof Option>;
