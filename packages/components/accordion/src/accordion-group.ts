import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, InjectionKey, PropType, Ref } from 'vue'
import type AccordionGroup from './accordion-group.vue'

export const accordionGroupProps = buildProps({
  modelValue: {
    type: [String, Array, null] as PropType<string | string[] | null>,
    required: false,
    default: null,
  },
  multiple: {
    type: Boolean,
    required: false,
    default: false,
  },
  contained: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type AccordionGroupProps = ExtractPropTypes<typeof accordionGroupProps>

export type AccordionGroupInstance = InstanceType<typeof AccordionGroup>

export type AccordionState = {
  name: string
  expanded: boolean
}

export type AccordionGroupContext = {
  accordionsList: Ref<AccordionState[]>
  handleChange: (name: string) => void
  expandedAccordions: Ref<string | string[]>
}

export const accordionGroupKey: InjectionKey<AccordionGroupContext> =
  Symbol('accordion-group')
