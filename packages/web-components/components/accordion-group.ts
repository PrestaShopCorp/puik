import { defineCustomElement } from 'vue';
import { PuikAccordionGroup } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import accordionGroupStyles from '@prestashopcorp/puik-theme/puik-accordion-group.css?inline';

const PuikAccordionGroupCe = defineCustomElement(PuikAccordionGroup,
  {
    styles: [baseStyles, accordionGroupStyles]
  }
) as CustomElementWithName;
PuikAccordionGroupCe.ceName = 'puik-accordion-group-ce';

export default PuikAccordionGroupCe;
