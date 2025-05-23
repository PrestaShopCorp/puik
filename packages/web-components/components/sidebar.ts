import { defineCustomElement } from 'vue';
import { PuikSidebar } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import sidebarStyles from '@prestashopcorp/puik-theme/puik-sidebar.css?inline';
import accordionGroupStyles from '@prestashopcorp/puik-theme/puik-accordion-group.css?inline';
import buttonStyles from '@prestashopcorp/puik-theme/puik-button.css?inline';

const PuikSidebarCe = defineCustomElement(PuikSidebar,
  {
    styles: [preflightStyles, baseStyles, sidebarStyles, accordionGroupStyles, buttonStyles]
  }
) as CustomElementWithName;
PuikSidebarCe.ceName = 'puik-sidebar-ce';

export default PuikSidebarCe;
