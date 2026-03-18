import type Option from './option.vue';
import type { PuikTagVariants } from '../../tag/src/tag';

export interface OptionType {
  [key: string]: any
}
export interface OptionProps {
  label?: string | number
  value?: string | number
  description?: string
  tag?: string
  tagVariant?: `${PuikTagVariants}`
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
