import { defineCustomElement } from 'vue';
import { PuikAccordionGroup } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikAccordionGroupCe = defineCustomElement(PuikAccordionGroup) as CustomElementWithTagName;
PuikAccordionGroupCe.tagName = 'puik-accordion-group-ce';

export default PuikAccordionGroupCe;
