import { defineCustomElement } from 'vue';
import { PuikDivider } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import dividerStyles from '@prestashopcorp/puik-theme/puik-divider.css?inline';

const PuikDividerCe = defineCustomElement(PuikDivider,
  {
    styles: [baseStyles, dividerStyles]
  }
) as CustomElementWithName;
PuikDividerCe.ceName = 'puik-divider-ce';

export default PuikDividerCe;
