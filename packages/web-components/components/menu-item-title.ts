import { defineCustomElement } from 'vue';
import { PuikMenuItemTitle } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import menuItemTitleStyles from '@prestashopcorp/puik-theme/puik-menu-item-title.css?inline';

const PuikMenuItemTitleCe = defineCustomElement(PuikMenuItemTitle,
  {
    styles: [preflightStyles, baseStyles, menuItemTitleStyles]
  }
) as CustomElementWithName;
PuikMenuItemTitleCe.ceName = 'puik-menu-item-title-ce';

export default PuikMenuItemTitleCe;
