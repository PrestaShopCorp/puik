import { defineCustomElement } from 'vue';
import { PuikLink } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import linkStyles from '@prestashopcorp/puik-theme/puik-link.css?inline';

const PuikLinkCe = defineCustomElement(PuikLink,
  {
    styles: [baseStyles, linkStyles]
  }
) as CustomElementWithName;
PuikLinkCe.ceName = 'puik-link-ce';

export default PuikLinkCe;
