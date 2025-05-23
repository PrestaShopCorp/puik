import { defineCustomElement, type DefineComponent } from 'vue';
import { PuikAccordion } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import accordionStyles from '@prestashopcorp/puik-theme/puik-accordion.css?inline';
import iconStyles from '@prestashopcorp/puik-theme/puik-icon.css?inline';

const PuikAccordionCe = defineCustomElement(PuikAccordion as DefineComponent<unknown, any, any, any>,
  {
    styles: [preflightStyles, baseStyles, accordionStyles, iconStyles]
  }
) as CustomElementWithName;
PuikAccordionCe.ceName = 'puik-accordion-ce';

export default PuikAccordionCe;
