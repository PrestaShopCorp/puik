import { buildProps } from '@puik/utils'
import type { RouteLocationRaw } from 'vue-router'
import type { ExtractPropTypes, PropType } from 'vue'
import type Breadcrumb from './breadcrumb.vue'

import type { PuikTargetString } from '../../link/src/link'
export interface BreadcrumbItem {
  label: string
  to?: RouteLocationRaw
  href?: string
  target?: PuikTargetString
  dataTest?: string
}

export const breadcrumbProps = buildProps({
  items: {
    type: Array as PropType<BreadcrumbItem[]>,
    required: false,
    default: () => [],
  },
  separatorIcon: {
    type: String,
    required: false,
    default: 'keyboard_arrow_right',
  },
  icon: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>

export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>
