import type Input from './input.vue';
import { PuikAriaLive } from '@prestashopcorp/puik-components/base/src/common';

export enum PuikInputTypes {
  Text = 'text',
  Password = 'password',
  Email = 'email',
  Number = 'number',
  Search = 'search',
  Url = 'url',
  Phone = 'tel',
}

export interface InputProps {
  modelValue?: string | number
  type?: `${PuikInputTypes}`
  id?: string
  srLabel?: string
  placeholder?: string
  disabled?: boolean
  name?: string
  autocomplete?: string
  step?: number
  precision?: number
  min?: number
  max?: number
  maxCharacters?: number
  required?: boolean
  error?: string
  success?: boolean
  hideHint?: boolean
  dataTest?: string
  ariaLabel?: string
  ariaLive?: `${PuikAriaLive}`
}

export type InputInstance = InstanceType<typeof Input>;
