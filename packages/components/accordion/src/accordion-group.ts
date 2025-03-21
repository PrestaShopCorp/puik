import type { InjectionKey, Ref } from 'vue';
import type AccordionGroup from './accordion-group.vue';

export interface AccordionGroupProps {
  modelValue?: string | string[] | null
  multiple?: boolean
  contained?: boolean
}

export type AccordionGroupInstance = InstanceType<typeof AccordionGroup>;

export type AccordionState = {
  name: string
  expanded: boolean
};

export type AccordionGroupContext = {
  accordionsList: Ref<AccordionState[]>
  handleChange: (name: string) => void
  expandedAccordions: Ref<AccordionGroupProps['modelValue']>
};

export const accordionGroupKey: InjectionKey<AccordionGroupContext> =
  Symbol('accordion-group');
