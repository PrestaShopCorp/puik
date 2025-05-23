import { DefineComponent, defineCustomElement } from 'vue';
import { PuikTabNavigation } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import tabNavigationStyles from '@prestashopcorp/puik-theme/puik-tab-navigation.css?inline';

const PuikTabNavigationCe = defineCustomElement(PuikTabNavigation as DefineComponent<unknown, any, any, any>,
  {
    styles: [preflightStyles, baseStyles, tabNavigationStyles]
  }
) as CustomElementWithName;
PuikTabNavigationCe.ceName = 'puik-tab-navigation-ce';

export default PuikTabNavigationCe;
