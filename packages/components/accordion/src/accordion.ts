import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type accordion from './accordion.vue'

export const paddingVariants = [
  'smaller',
  'small',
  'normal',
  'large',
  'larger',
] as const

export type PuikPaddingVariant = (typeof paddingVariants)[number]

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
  headerPaddingX: {
    type: String as PropType<PuikPaddingVariant>,
    required: false,
    default: 'large',
  },
  headerPaddingY: {
    type: String as PropType<PuikPaddingVariant>,
    required: false,
    default: 'normal',
  },
  contentPaddingX: {
    type: String as PropType<PuikPaddingVariant>,
    required: false,
    default: 'large',
  },
  contentPaddingY: {
    type: String as PropType<PuikPaddingVariant>,
    required: false,
    default: 'normal',
  },
} as const)

export const accordionEmits = ['click']

export type AccordionProps = ExtractPropTypes<typeof accordionProps>

export type AccordionInstance = InstanceType<typeof accordion>
