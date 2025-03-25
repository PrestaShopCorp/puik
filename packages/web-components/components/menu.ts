import { defineCustomElement } from 'vue';
import { PuikMenu } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import menuStyles from '@prestashopcorp/puik-theme/puik-menu.css?inline';

const PuikMenuCe = defineCustomElement(PuikMenu,
  {
    styles: [baseStyles, menuStyles]
  }
) as CustomElementWithName;
PuikMenuCe.ceName = 'puik-menu-ce';

export default PuikMenuCe;
