import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Link from './link.vue'

export const targetVariants = ['_blank', '_self', '_parent', '_top']

export const linkProps = buildProps({
  href: {
    type: String,
    required: false,
    default: undefined,
  },
  to: {
    type: String,
    required: false,
    default: undefined,
  },
  target: {
    type: String,
    values: targetVariants,
    required: false,
    default: '_self',
  },
  title: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type LinkProps = ExtractPropTypes<typeof linkProps>

export type LinkInstance = InstanceType<typeof Link>
