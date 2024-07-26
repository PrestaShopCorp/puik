import '@prestashopcorp/puik-components/breadcrumb/style/css';
import type { RouteLocationRaw } from 'vue-router';
import type Breadcrumb from './breadcrumb.vue';
import type { PuikLinkTargetVariants } from '../../link';

export interface BreadcrumbItem {
  label: string
  to?: RouteLocationRaw
  href?: string
  target?: `${PuikLinkTargetVariants}`
  dataTest?: string
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  itemsJson?: string
  separatorIcon?: string
  icon?: string
}

export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>;
