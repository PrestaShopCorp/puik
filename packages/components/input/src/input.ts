import type Input from './input.vue'

export enum PuikInputTypes {
  Text = 'text',
  Password = 'password',
  Email = 'email',
  Number = 'number',
  Search = 'search',
  URL = 'url',
  Telephone = 'tel',
}

export interface InputProps {
  modelValue?: string | number
  type?: `${PuikInputTypes}`
  id?: string
  placeholder?: string
  disabled?: boolean
  name?: string
  autocomplete?: string
  step?: number
  precision?: number
  min?: number
  max?: number
  required?: boolean
  error?: string
  success?: boolean
  hideHint?: boolean
}

export type InputInstance = InstanceType<typeof Input>
