import { defineCustomElement } from 'vue';
import { PuikMenu } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikMenuCe = defineCustomElement(PuikMenu) as CustomElementWithTagName;
PuikMenuCe.tagName = 'puik-menu-ce';

export default PuikMenuCe;
