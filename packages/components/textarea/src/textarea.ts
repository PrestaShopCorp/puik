import { buildProps } from '@puik/utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type Textarea from './textarea.vue'

export const resizeValue = [
  'none',
  'both',
  'horizontal',
  'vertical',
  'block',
  'inline',
] as const

export type ResizeType = (typeof resizeValue)[number]

export const textareaProps = buildProps({
  id: {
    type: String,
    required: false,
    default: '',
  },
  name: {
    type: String,
    required: false,
    default: undefined,
  },
  modelValue: {
    type: String,
    required: false,
    default: undefined,
  },
  placeholder: {
    type: String,
    required: false,
    default: undefined,
  },
  autofocus: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  readonly: {
    type: Boolean,
    required: false,
    default: false,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  maxlength: {
    type: Number,
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
  hideHint: {
    type: Boolean,
    required: false,
    default: false,
  },
  autoGrow: {
    type: Boolean,
    required: false,
    default: true,
  },
  rows: {
    type: Number,
    required: false,
    default: 2,
  },
  maxRows: {
    type: Number,
    required: false,
    default: 2,
  },
  characterCount: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type TextareaProps = ExtractPropTypes<typeof textareaProps>

export type TextareaInstance = InstanceType<typeof Textarea>
