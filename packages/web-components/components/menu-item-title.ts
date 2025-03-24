import { defineCustomElement } from 'vue';
import { PuikMenuItemTitle } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-menu-item-title.css';

const PuikMenuItemTitleCe = defineCustomElement(PuikMenuItemTitle) as CustomElementWithName;
PuikMenuItemTitleCe.ceName = 'puik-menu-item-title-ce';

export default PuikMenuItemTitleCe;
