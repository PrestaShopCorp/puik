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
} as const)

export const accordionEmitEmits = ['update:modelValue']

export type AccordionProps = ExtractPropTypes<typeof accordionProps>

export type AccordionInstance = InstanceType<typeof accordion>
