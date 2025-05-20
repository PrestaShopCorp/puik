import { defineCustomElement } from 'vue';
import { PuikSidebarTitle } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import sidebarTitleStyles from '@prestashopcorp/puik-theme/puik-sidebar-title.css?inline';

const PuikSidebarTitleCe = defineCustomElement(PuikSidebarTitle,
  {
    styles: [preflightStyles, baseStyles, sidebarTitleStyles]
  }
) as CustomElementWithName;
PuikSidebarTitleCe.ceName = 'puik-sidebar-title-ce';

export default PuikSidebarTitleCe;
