import { defineCustomElement } from 'vue';
import { PuikBadge } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikBadgeCe = defineCustomElement(PuikBadge) as CustomElementWithName;
PuikBadgeCe.ceName = 'puik-badge-ce';

export default PuikBadgeCe;
