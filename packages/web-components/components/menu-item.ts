import { defineCustomElement } from 'vue';
import { PuikMenuItem } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import menuItemStyles from '@prestashopcorp/puik-theme/puik-menu-item.css?inline';
import buttonStyles from '@prestashopcorp/puik-theme/puik-button.css?inline';

const PuikMenuItemCe = defineCustomElement(PuikMenuItem,
  {
    styles: [preflightStyles, baseStyles, menuItemStyles, buttonStyles]
  }
) as CustomElementWithName;
PuikMenuItemCe.ceName = 'puik-menu-item-ce';

export default PuikMenuItemCe;
