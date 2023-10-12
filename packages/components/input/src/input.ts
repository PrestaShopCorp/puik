import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Input from './input.vue'

export const inputTypes = [
  'text',
  'password',
  'email',
  'number',
  'search',
  'url',
  'tel',
] as const

export type PuikInputType = (typeof inputTypes)[number]

export const inputProps = buildProps({
  modelValue: {
    type: [String, Number],
    required: false,
    default: '',
  },
  hasSlotAppend: {
    type: Boolean,
    required: false,
    default: false,
  },
  hasSlotPrepend: {
    type: Boolean,
    required: false,
    default: false,
  },
  hasSlotHint: {
    type: Boolean,
    required: false,
    default: false,
  },
  type: {
    type: String as PropType<PuikInputType>,
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
  name: {
    type: String,
    required: false,
    default: undefined,
  },
  hint: {
    type: String,
    required: false,
    default: undefined,
  },
  autocomplete: {
    type: String,
    required: false,
    default: undefined,
  },
  step: {
    type: Number,
    required: false,
    default: 1,
  },
  precision: {
    type: Number,
    required: false,
    default: undefined,
  },
  min: {
    type: Number,
    required: false,
    default: Number.NEGATIVE_INFINITY,
  },
  max: {
    type: Number,
    required: false,
    default: Number.POSITIVE_INFINITY,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
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
  hideHint: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type InputProps = ExtractPropTypes<typeof inputProps>

export const inputEmits = ['update:modelValue']
export type InputEmits = typeof inputEmits

export type InputInstance = InstanceType<typeof Input>
