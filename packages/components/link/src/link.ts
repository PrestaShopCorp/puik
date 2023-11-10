import type { RouteLocationRaw } from 'vue-router'
import type Link from './link.vue'

export enum PuikLinkTargetVariants {
  Blank = '_blank',
  Self = '_self',
  Parent = '_parent',
  Top = '_top',
}

export enum PuikLinkSizes {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

export interface LinkProps {
  size?: PuikLinkSizes | `${PuikLinkSizes}`
  href?: string
  to?: RouteLocationRaw
  target?: PuikLinkTargetVariants | `${PuikLinkTargetVariants}`
  title?: string
}

export type LinkInstance = InstanceType<typeof Link>
