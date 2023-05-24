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
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export const accordionEmits = ['click']

export type AccordionProps = ExtractPropTypes<typeof accordionProps>

export type AccordionInstance = InstanceType<typeof accordion>
