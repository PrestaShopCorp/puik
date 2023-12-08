import { defineCustomElement } from 'vue';
import { PuikMenuItemSeparator } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikMenuItemSeparatorCe = defineCustomElement(PuikMenuItemSeparator) as unknown as CustomElementWithTagName;
PuikMenuItemSeparatorCe.tagName = 'puik-menu-item-separator-ce';

export default PuikMenuItemSeparatorCe;
