import { defineCustomElement } from 'vue';
import { PuikCard } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import cardStyles from '@prestashopcorp/puik-theme/puik-card.css?inline';

const PuikCardCe = defineCustomElement(PuikCard,
  {
    styles: [baseStyles, cardStyles]
  }
) as CustomElementWithName;
PuikCardCe.ceName = 'puik-card-ce';

export default PuikCardCe;
