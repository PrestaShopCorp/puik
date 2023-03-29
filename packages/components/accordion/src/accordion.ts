import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type accordion from './accordion.vue'

export const accordionProps = buildProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
    default: undefined,
  },
  subTitle: {
    type: String,
    required: false,
    default: undefined,
  },
  icon: {
    type: String,
    required: false,
    default: undefined,
  },
  expandIcon: {
    type: String,
    required: false,
    default: 'keyboard_arrow_down',
  },
  collapseIcon: {
    type: String,
    required: false,
    default: 'keyboard_arrow_up',
  },
} as const)

export const accordionEmits = ['click']

export type AccordionProps = ExtractPropTypes<typeof accordionProps>

export type AccordionInstance = InstanceType<typeof accordion>
