import { defineCustomElement } from 'vue';
import { PuikTabNavigationPanel } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import tabNavigationPanelStyles from '@prestashopcorp/puik-theme/puik-tab-navigation-panel.css?inline';

const PuikTabNavigationPanelCe = defineCustomElement(PuikTabNavigationPanel,
  {
    styles: [baseStyles, tabNavigationPanelStyles]
  }
) as CustomElementWithName;
PuikTabNavigationPanelCe.ceName = 'puik-navigation-panel-ce';

export default PuikTabNavigationPanelCe;
