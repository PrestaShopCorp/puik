import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Input from './input.vue'

export const inputTypes = [
  'text',
  'password',
  'email',
  'number',
  'search',
  'url',
  'tel',
]

export const inputProps = buildProps({
  modelValue: {
    type: [String, Number],
    required: false,
    default: '',
  },
  type: {
    type: String,
    values: inputTypes,
    required: false,
    default: 'text',
  },
  id: {
    type: String,
    required: false,
    default: undefined,
  },
  placeholder: {
    type: String,
    required: false,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  leftIcon: {
    type: String,
    required: false,
    default: undefined,
  },
  error: {
    type: String,
    required: false,
    default: undefined,
  },
  success: {
    type: Boolean,
    required: false,
    default: false,
  },
  hideHelpText: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type InputProps = ExtractPropTypes<typeof inputProps>

export const inputEmits = ['update:modelValue']
export type InputEmits = typeof inputEmits

export type InputInstance = InstanceType<typeof Input>
