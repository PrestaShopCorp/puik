import { DefineComponent, defineCustomElement } from 'vue';
import { PuikTabNavigation } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-tab-navigation.css';

const PuikTabNavigationCe = defineCustomElement(PuikTabNavigation as DefineComponent<unknown, any, any, any>) as CustomElementWithName;
PuikTabNavigationCe.ceName = 'puik-tab-navigation-ce';

export default PuikTabNavigationCe;
