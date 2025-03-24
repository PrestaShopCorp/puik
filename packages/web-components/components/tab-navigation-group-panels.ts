import { defineCustomElement } from 'vue';
import { PuikTabNavigationGroupPanels } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-tab-navigation-group-panels.css';

const PuikTabNavigationGroupPanelsCe = defineCustomElement(PuikTabNavigationGroupPanels) as CustomElementWithName;
PuikTabNavigationGroupPanelsCe.ceName = 'puik-tab-navigation-group-panels-ce';

export default PuikTabNavigationGroupPanelsCe;
