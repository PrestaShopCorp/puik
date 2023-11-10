import { buildProps } from '@prestashopcorp/puik-utils'
import type { ExtractPropTypes } from 'vue'
import type Textarea from './textarea.vue'

export const textareaProps = buildProps({
  id: {
    type: String,
    required: false,
    default: undefined,
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
} as const)

export type TextareaProps = ExtractPropTypes<typeof textareaProps>

export type TextareaInstance = InstanceType<typeof Textarea>
