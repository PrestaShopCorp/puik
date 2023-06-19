import { buildProps } from '@puik/utils'
import type { RouteLocationRaw } from 'vue-router'
import type { ExtractPropTypes, PropType } from 'vue'
import type Link from './link.vue'

export const targetVariants = ['_blank', '_self', '_parent', '_top'] as const
export type TargetVariantsType = (typeof targetVariants)[number]
export const linkSizes = ['sm', 'md', 'lg'] as const
export type LinkSizesType = (typeof linkSizes)[number]

export const linkProps = buildProps({
  size: {
    type: String as PropType<LinkSizesType>,
    required: false,
    default: 'md',
  },
  href: {
    type: String,
    required: false,
    default: undefined,
  },
  to: {
    type: [Object, String] as PropType<RouteLocationRaw>,
    required: false,
    default: undefined,
  },
  target: {
    type: String as PropType<TargetVariantsType>,
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
