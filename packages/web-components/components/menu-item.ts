import { defineCustomElement } from 'vue';
import { PuikMenuItem } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-menu-item.css';
import '@prestashopcorp/puik-theme/puik-button.css';

const PuikMenuItemCe = defineCustomElement(PuikMenuItem) as CustomElementWithName;
PuikMenuItemCe.ceName = 'puik-menu-item-ce';

export default PuikMenuItemCe;
