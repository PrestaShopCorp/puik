import { defineCustomElement } from 'vue';
import { PuikTabNavigationPanel } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikTabNavigationPanelCe = defineCustomElement(PuikTabNavigationPanel) as CustomElementWithTagName;
PuikTabNavigationPanelCe.tagName = 'puik-navigation-panel-ce';

export default PuikTabNavigationPanelCe;
