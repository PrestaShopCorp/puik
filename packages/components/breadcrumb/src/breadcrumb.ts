import type { RouteLocationRaw } from 'vue-router'
import type Breadcrumb from './breadcrumb.vue'
import type { PuikLinkTargetVariants } from '../../link'

export interface BreadcrumbItem {
  label: string
  to?: RouteLocationRaw
  href?: string
  target?: `${PuikLinkTargetVariants}`
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separatorIcon?: string
  icon?: string
}

export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>
