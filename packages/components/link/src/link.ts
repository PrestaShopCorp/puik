import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Link from './link.vue'

export const linkProps = buildProps({
  href: {
    type: String,
    required: false,
    default: '#',
  },
  target: {
    type: String,
    required: false,
    default: '_parent',
  },
  title: {
    type: String,
    required: false,
  },
  icon: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type LinkProps = ExtractPropTypes<typeof linkProps>

export type LinkInstance = InstanceType<typeof Link>
