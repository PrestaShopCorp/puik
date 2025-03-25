import { defineCustomElement } from 'vue';
import { PuikMenuItemSeparator } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import itemSeparatorStyles from '@prestashopcorp/puik-theme/puik-menu-item-separator.css?inline';

const PuikMenuItemSeparatorCe = defineCustomElement(PuikMenuItemSeparator,
  {
    styles: [baseStyles, itemSeparatorStyles]
  }
) as CustomElementWithName;
PuikMenuItemSeparatorCe.ceName = 'puik-menu-item-separator-ce';

export default PuikMenuItemSeparatorCe;
