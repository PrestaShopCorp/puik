import { buildProps } from '@puik/utils/props'

import type { ExtractPropTypes } from 'vue'

export const badgeProps = buildProps({
  type: {
    type: String,
    values: ['primary', 'success', 'warning', 'info', 'danger', 'secondary'],
    default: 'primary',
  },
  size: {
    type: String,
    values: ['small', 'medium', 'large'],
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  value: {
    type: [String, Number],
    default: '',
  },
  max: {
    type: Number,
    default: 99,
  },
} as const)

export type BadgeProps = ExtractPropTypes<typeof badgeProps>
