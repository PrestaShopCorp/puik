import { defineCustomElement } from 'vue';
import { PuikMenuItemTitle } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import menuItemTitleStyles from '@prestashopcorp/puik-theme/puik-menu-item-title.css?inline';

const PuikMenuItemTitleCe = defineCustomElement(PuikMenuItemTitle,
  {
    styles: [baseStyles, menuItemTitleStyles]
  }
) as CustomElementWithName;
PuikMenuItemTitleCe.ceName = 'puik-menu-item-title-ce';

export default PuikMenuItemTitleCe;
