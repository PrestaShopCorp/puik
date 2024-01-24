import { defineCustomElement } from 'vue';
import { PuikTabNavigation } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikTabNavigationCe = defineCustomElement(PuikTabNavigation) as CustomElementWithName;
PuikTabNavigationCe.ceName = 'puik-tab-navigation-ce';

export default PuikTabNavigationCe;
