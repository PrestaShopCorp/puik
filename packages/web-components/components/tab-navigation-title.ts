import { defineCustomElement } from 'vue';
import { PuikTabNavigationTitle } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-tab-navigation-title.css';

const PuikTabNavigationTitleCe = defineCustomElement(PuikTabNavigationTitle) as CustomElementWithName;
PuikTabNavigationTitleCe.ceName = 'puik-tab-navigation-title-ce';

export default PuikTabNavigationTitleCe;
