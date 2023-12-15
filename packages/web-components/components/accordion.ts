import { defineCustomElement } from 'vue';
import { PuikAccordion } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikAccordionCe = defineCustomElement(PuikAccordion) as CustomElementWithTagName;
PuikAccordionCe.tagName = 'puik-accordion-ce';

export default PuikAccordionCe;
