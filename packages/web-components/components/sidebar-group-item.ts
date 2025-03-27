import { defineCustomElement } from 'vue';
import { PuikSidebarGroupItem } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import sidebarGroupItemStyles from '@prestashopcorp/puik-theme/puik-sidebar-group-item.css?inline';
import accordionStyles from '@prestashopcorp/puik-theme/puik-accordion.css?inline';
import buttonStyles from '@prestashopcorp/puik-theme/puik-button.css?inline';
import iconStyles from '@prestashopcorp/puik-theme/puik-icon.css?inline';

const PuikSidebarGroupItemCe = defineCustomElement(PuikSidebarGroupItem,
  {
    styles: [baseStyles, sidebarGroupItemStyles, accordionStyles, buttonStyles, iconStyles]
  }
) as CustomElementWithName;
PuikSidebarGroupItemCe.ceName = 'puik-sidebar-group-item-ce';

export default PuikSidebarGroupItemCe;
