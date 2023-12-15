import { defineCustomElement } from 'vue';
import { PuikMenuItem } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikMenuItemCe = defineCustomElement(PuikMenuItem) as CustomElementWithTagName;
PuikMenuItemCe.tagName = 'puik-menu-item-ce';

export default PuikMenuItemCe;
