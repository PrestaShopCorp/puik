import { defineCustomElement } from 'vue';
import { PuikMenuItem } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikMenuItemCe = defineCustomElement(PuikMenuItem) as CustomElementWithName;
PuikMenuItemCe.ceName = 'puik-menu-item-ce';

export default PuikMenuItemCe;
