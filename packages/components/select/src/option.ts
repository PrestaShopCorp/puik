import '@prestashopcorp/puik-components/option/style/css';
import type Option from './option.vue';

export interface OptionType {
  label: string
  value: any
}
export interface OptionProps {
  option: OptionType
  selectedOptions: OptionType[]
  multiSelect?: boolean
}

export type OptionEmits = {
  'select': [payload: OptionType]
};

export type OptionInstance = InstanceType<typeof Option>;
