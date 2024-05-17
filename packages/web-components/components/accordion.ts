import { defineCustomElement, DefineComponent } from 'vue';
import { PuikAccordion } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikAccordionCe = defineCustomElement(PuikAccordion as DefineComponent<unknown, any, any, any>) as CustomElementWithName;
PuikAccordionCe.ceName = 'puik-accordion-ce';

export default PuikAccordionCe;
