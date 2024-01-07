import { defineCustomElement } from 'vue';
import { PuikAccordion } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikAccordionCe = defineCustomElement(PuikAccordion) as CustomElementWithName;
PuikAccordionCe.ceName = 'puik-accordion-ce';

export default PuikAccordionCe;
