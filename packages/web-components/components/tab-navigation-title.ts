import { defineCustomElement } from 'vue';
import { PuikTabNavigationTitle } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import tabNavigationTitleStyles from '@prestashopcorp/puik-theme/puik-tab-navigation-title.css?inline';

const PuikTabNavigationTitleCe = defineCustomElement(PuikTabNavigationTitle,
  {
    styles: [baseStyles, tabNavigationTitleStyles]
  }
) as CustomElementWithName;
PuikTabNavigationTitleCe.ceName = 'puik-tab-navigation-title-ce';

export default PuikTabNavigationTitleCe;
