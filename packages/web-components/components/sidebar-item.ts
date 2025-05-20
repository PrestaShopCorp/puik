import { defineCustomElement } from 'vue';
import { PuikSidebarItem } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import sidebarItemStyles from '@prestashopcorp/puik-theme/puik-sidebar-item.css?inline';
import buttonStyles from '@prestashopcorp/puik-theme/puik-button.css?inline';

const PuikSidebarItemCe = defineCustomElement(PuikSidebarItem,
  {
    styles: [preflightStyles, baseStyles, sidebarItemStyles, buttonStyles]
  }
) as CustomElementWithName;
PuikSidebarItemCe.ceName = 'puik-sidebar-item-ce';

export default PuikSidebarItemCe;
