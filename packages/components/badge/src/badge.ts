import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Badge from './badge.vue'

export const badgeVariants = ['success', 'warning', 'danger', 'info']

export const badgeProps = buildProps({
  variant: {
    type: String,
    values: badgeVariants,
    default: 'success',
  },
} as const)

export type BadgeProps = ExtractPropTypes<typeof badgeProps>

export type BadgeInstance = InstanceType<typeof Badge>
