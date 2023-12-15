import { defineCustomElement } from 'vue';
import { PuikTabNavigation } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikTabNavigationCe = defineCustomElement(PuikTabNavigation) as CustomElementWithTagName;
PuikTabNavigationCe.tagName = 'puik-tab-navigation-ce';

export default PuikTabNavigationCe;
