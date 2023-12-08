import { defineCustomElement } from 'vue';
import { PuikMenuItemTitle } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikMenuItemTitleCe = defineCustomElement(PuikMenuItemTitle) as unknown as CustomElementWithTagName;
PuikMenuItemTitleCe.tagName = 'puik-menu-item-title-ce';

export default PuikMenuItemTitleCe;
