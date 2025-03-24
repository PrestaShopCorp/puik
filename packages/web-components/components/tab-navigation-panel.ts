import { defineCustomElement } from 'vue';
import { PuikTabNavigationPanel } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-tab-navigation-panel.css';

const PuikTabNavigationPanelCe = defineCustomElement(PuikTabNavigationPanel) as CustomElementWithName;
PuikTabNavigationPanelCe.ceName = 'puik-navigation-panel-ce';

export default PuikTabNavigationPanelCe;
