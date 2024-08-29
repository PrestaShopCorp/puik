import '@prestashopcorp/puik-components/textarea/style/css';
import type Textarea from './textarea.vue';

export interface TextareaProps {
  id?: string
  name?: string
  modelValue?: string
  placeholder?: string
  autofocus?: boolean
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  maxLength?: number
  error?: string
  hideHint?: boolean
  autoGrow?: boolean
  rows?: number
  maxRows?: number
  ariaLabel?: string
}

export type TextareaInstance = InstanceType<typeof Textarea>;
