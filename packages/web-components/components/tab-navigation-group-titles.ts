import { defineCustomElement } from 'vue';
import { PuikTabNavigationGroupTitles } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikTabNavigationGroupTitlesCe = defineCustomElement(PuikTabNavigationGroupTitles) as CustomElementWithName;
PuikTabNavigationGroupTitlesCe.ceName = 'puik-tab-navigation-group-titles-ce';

export default PuikTabNavigationGroupTitlesCe;
