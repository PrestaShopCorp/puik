import { defineCustomElement } from 'vue';
import { PuikMenuItemSeparator } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikMenuItemSeparatorCe = defineCustomElement(PuikMenuItemSeparator) as CustomElementWithName;
PuikMenuItemSeparatorCe.ceName = 'puik-menu-item-separator-ce';

export default PuikMenuItemSeparatorCe;
