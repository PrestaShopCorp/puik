import { defineCustomElement } from 'vue';
import { PuikCard } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import cardStyles from '@prestashopcorp/puik-theme/puik-card.css?inline';

const PuikCardCe = defineCustomElement(PuikCard,
  {
    styles: [preflightStyles, baseStyles, cardStyles]
  }
) as CustomElementWithName;
PuikCardCe.ceName = 'puik-card-ce';

export default PuikCardCe;
