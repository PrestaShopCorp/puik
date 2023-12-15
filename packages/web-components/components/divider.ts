import { defineCustomElement } from 'vue';
import { PuikDivider } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikDividerCe = defineCustomElement(PuikDivider) as CustomElementWithTagName;
PuikDividerCe.tagName = 'puik-divider-ce';

export default PuikDividerCe;
