import { defineCustomElement } from 'vue';
import { PuikAccordionGroup } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import accordionGroupStyles from '@prestashopcorp/puik-theme/puik-accordion-group.css?inline';

const PuikAccordionGroupCe = defineCustomElement(PuikAccordionGroup,
  {
    styles: [preflightStyles,baseStyles, accordionGroupStyles]
  }
) as CustomElementWithName;
PuikAccordionGroupCe.ceName = 'puik-accordion-group-ce';

export default PuikAccordionGroupCe;
