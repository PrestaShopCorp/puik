import { defineCustomElement } from 'vue';
import { PuikTabNavigationGroupTitles } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikTabNavigationGroupTitlesCe = defineCustomElement(PuikTabNavigationGroupTitles) as unknown as CustomElementWithTagName;
PuikTabNavigationGroupTitlesCe.tagName = 'puik-tab-navigation-group-titles-ce';

export default PuikTabNavigationGroupTitlesCe;
