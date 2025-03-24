import { defineCustomElement } from 'vue';
import { PuikMenu } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-menu.css';

const PuikMenuCe = defineCustomElement(PuikMenu) as CustomElementWithName;
PuikMenuCe.ceName = 'puik-menu-ce';

export default PuikMenuCe;
