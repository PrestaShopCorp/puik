import '../style';
import type Radio from './radio.vue';

export interface RadioProps {
  id?: string
  name?: string
  label?: string
  disabled?: boolean
  value: boolean | string | number
  modelValue: boolean | string | number
  dataTest?: string
  ariaLabel?: string
  ariaDescribedby?: string
  srDescriptionOnly?: string
}

export type RadioInstance = InstanceType<typeof Radio>;
