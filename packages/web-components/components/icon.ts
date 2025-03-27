import { defineCustomElement } from 'vue';
import { PuikIcon } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import iconStyles from '@prestashopcorp/puik-theme/puik-icon.css?inline';

const PuikIconCe = defineCustomElement(PuikIcon,
  {
    styles: [baseStyles, iconStyles]
  }
) as CustomElementWithName;
PuikIconCe.ceName = 'puik-icon-ce';

export default PuikIconCe;
