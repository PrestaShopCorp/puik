import { defineCustomElement } from 'vue';
import { PuikBadge } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikBadgeCe = defineCustomElement(PuikBadge) as CustomElementWithTagName;
PuikBadgeCe.tagName = 'puik-badge-ce';

export default PuikBadgeCe;
