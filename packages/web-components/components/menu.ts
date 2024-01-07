import { defineCustomElement } from 'vue';
import { PuikMenu } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikMenuCe = defineCustomElement(PuikMenu) as CustomElementWithName;
PuikMenuCe.ceName = 'puik-menu-ce';

export default PuikMenuCe;
