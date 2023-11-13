import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Label from './label.vue'
export const labelProps = buildProps({
  dataTest: {
    type: String,
    required: false,
    default: undefined,
  },
  optional: {
    type: Boolean,
    required: false,
    default: false,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  readonly: {
    type: Boolean,
    required: false,
    default: false,
  },
  for: {
    type: String,
    required: true,
  },
} as const)

export type LabelProps = ExtractPropTypes<typeof labelProps>

export type LabelInstance = InstanceType<typeof Label>
