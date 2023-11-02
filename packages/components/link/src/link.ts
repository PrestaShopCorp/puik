import { buildProps } from '@puik/utils'
import type { RouteLocationRaw } from 'vue-router'
import type { ExtractPropTypes, PropType } from 'vue'
import type Link from './link.vue'

export enum PuikLinkTarget {
  BLANK = '_blank',
  SELF = '_self',
  PARENT = '_parent',
  TOP = '_top',
}

export const targetVariants = ['_blank', '_self', '_parent', '_top'] as const
export type PuikTargetString = (typeof targetVariants)[number]

export enum PuikLinkSize {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
}

export const linkSizes = ['sm', 'md', 'lg'] as const
export type PuikLinkSizeString = (typeof linkSizes)[number]

export const linkProps = buildProps({
  size: {
    type: [
      String as PropType<PuikLinkSize>,
      String as PropType<PuikLinkSizeString>,
    ],
    required: false,
    default: PuikLinkSize.MEDIUM,
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
    type: [
      String as PropType<PuikLinkTarget>,
      String as PropType<PuikTargetString>,
    ],
    required: false,
    default: PuikLinkTarget.SELF,
  },
  title: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type LinkProps = ExtractPropTypes<typeof linkProps>

export type LinkInstance = InstanceType<typeof Link>
