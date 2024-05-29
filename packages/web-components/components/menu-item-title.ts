import { defineCustomElement } from 'vue';
import { PuikMenuItemTitle } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikMenuItemTitleCe = defineCustomElement(PuikMenuItemTitle) as CustomElementWithName;
PuikMenuItemTitleCe.ceName = 'puik-menu-item-title-ce';

export default PuikMenuItemTitleCe;
