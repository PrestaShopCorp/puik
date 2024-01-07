import { defineCustomElement } from 'vue';
import { PuikAccordionGroup } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikAccordionGroupCe = defineCustomElement(PuikAccordionGroup) as CustomElementWithName;
PuikAccordionGroupCe.ceName = 'puik-accordion-group-ce';

export default PuikAccordionGroupCe;
