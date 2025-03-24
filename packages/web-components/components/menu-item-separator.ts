import { defineCustomElement } from 'vue';
import { PuikMenuItemSeparator } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-menu-item-separator.css';

const PuikMenuItemSeparatorCe = defineCustomElement(PuikMenuItemSeparator) as CustomElementWithName;
PuikMenuItemSeparatorCe.ceName = 'puik-menu-item-separator-ce';

export default PuikMenuItemSeparatorCe;
