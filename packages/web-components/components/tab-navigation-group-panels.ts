import { defineCustomElement } from 'vue';
import { PuikTabNavigationGroupPanels } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikTabNavigationGroupPanelsCe = defineCustomElement(PuikTabNavigationGroupPanels) as CustomElementWithName;
PuikTabNavigationGroupPanelsCe.ceName = 'puik-tab-navigation-group-panels-ce';

export default PuikTabNavigationGroupPanelsCe;
