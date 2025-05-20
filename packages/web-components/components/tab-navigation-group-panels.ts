import { defineCustomElement } from 'vue';
import { PuikTabNavigationGroupPanels } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import tabNavigationGroupPanelsStyles from '@prestashopcorp/puik-theme/puik-tab-navigation-group-panels.css?inline';

const PuikTabNavigationGroupPanelsCe = defineCustomElement(PuikTabNavigationGroupPanels,
  {
    styles: [preflightStyles, baseStyles, tabNavigationGroupPanelsStyles]
  }
) as CustomElementWithName;
PuikTabNavigationGroupPanelsCe.ceName = 'puik-tab-navigation-group-panels-ce';

export default PuikTabNavigationGroupPanelsCe;
