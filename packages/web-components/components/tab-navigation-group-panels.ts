import { defineCustomElement } from 'vue';
import { PuikTabNavigationGroupPanels } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikTabNavigationGroupPanelsCe = defineCustomElement(PuikTabNavigationGroupPanels) as unknown as CustomElementWithTagName;
PuikTabNavigationGroupPanelsCe.tagName = 'puik-tab-navigation-group-panels-ce';

export default PuikTabNavigationGroupPanelsCe;
