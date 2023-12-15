import { defineCustomElement } from 'vue';
import { PuikTabNavigationTitle } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikTabNavigationTitleCe = defineCustomElement(PuikTabNavigationTitle) as CustomElementWithTagName;
PuikTabNavigationTitleCe.tagName = 'puik-tab-navigation-title-ce';

export default PuikTabNavigationTitleCe;
