import { defineCustomElement } from 'vue';
import { PuikDivider } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import dividerStyles from '@prestashopcorp/puik-theme/puik-divider.css?inline';

const PuikDividerCe = defineCustomElement(PuikDivider,
  {
    styles: [preflightStyles, baseStyles, dividerStyles]
  }
) as CustomElementWithName;
PuikDividerCe.ceName = 'puik-divider-ce';

export default PuikDividerCe;
