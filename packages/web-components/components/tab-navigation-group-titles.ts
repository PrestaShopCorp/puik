import { defineCustomElement } from 'vue';
import { PuikTabNavigationGroupTitles } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import tabNavigationGroupTitlesStyles from '@prestashopcorp/puik-theme/puik-tab-navigation-group-titles.css?inline';

const PuikTabNavigationGroupTitlesCe = defineCustomElement(PuikTabNavigationGroupTitles,
  {
    styles: [preflightStyles, baseStyles, tabNavigationGroupTitlesStyles]
  }
) as CustomElementWithName;
PuikTabNavigationGroupTitlesCe.ceName = 'puik-tab-navigation-group-titles-ce';

export default PuikTabNavigationGroupTitlesCe;
