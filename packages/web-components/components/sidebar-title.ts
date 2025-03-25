import { defineCustomElement } from 'vue';
import { PuikSidebarTitle } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import sidebarTitleStyles from '@prestashopcorp/puik-theme/puik-sidebar-title.css?inline';

const PuikSidebarTitleCe = defineCustomElement(PuikSidebarTitle,
  {
    styles: [baseStyles, sidebarTitleStyles]
  }
) as CustomElementWithName;
PuikSidebarTitleCe.ceName = 'puik-sidebar-title-ce';

export default PuikSidebarTitleCe;
