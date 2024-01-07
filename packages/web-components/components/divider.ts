import { defineCustomElement } from 'vue';
import { PuikDivider } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikDividerCe = defineCustomElement(PuikDivider) as CustomElementWithName;
PuikDividerCe.ceName = 'puik-divider-ce';

export default PuikDividerCe;
