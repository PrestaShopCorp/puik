import { defineCustomElement } from 'vue';
import { PuikBadge } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import badgeStyles from '@prestashopcorp/puik-theme/puik-badge.css?inline';

const PuikBadgeCe = defineCustomElement(PuikBadge,
  {
    styles: [baseStyles, badgeStyles]
  }
) as CustomElementWithName;
PuikBadgeCe.ceName = 'puik-badge-ce';

export default PuikBadgeCe;
