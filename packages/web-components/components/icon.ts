import { defineCustomElement } from 'vue';
import { PuikIcon } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikIconCe = defineCustomElement(PuikIcon) as CustomElementWithName;
PuikIconCe.ceName = 'puik-icon-ce';

export default PuikIconCe;
