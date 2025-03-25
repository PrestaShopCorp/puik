import { defineCustomElement } from 'vue';
import { PuikBreadcrumb } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import breadcrumbStyles from '@prestashopcorp/puik-theme/puik-breadcrumb.css?inline';
import linkStyles from '@prestashopcorp/puik-theme/puik-link.css?inline';
import iconStyles from '@prestashopcorp/puik-theme/puik-icon.css?inline';

const PuikBreadcrumbCe = defineCustomElement(PuikBreadcrumb,
  {
    styles: [baseStyles, breadcrumbStyles, linkStyles, iconStyles]
  }
) as CustomElementWithName;
PuikBreadcrumbCe.ceName = 'puik-breadcrumb-ce';

export default PuikBreadcrumbCe;
