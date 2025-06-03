import { defineCustomElement } from 'vue';
import { PuikLabel } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import labelStyles from '@prestashopcorp/puik-theme/puik-label.css?inline';

const PuikLabelCe = defineCustomElement(PuikLabel,
  {
    styles: [preflightStyles, baseStyles, labelStyles]
  }
) as CustomElementWithName;
PuikLabelCe.ceName = 'puik-label-ce';

export default PuikLabelCe;
