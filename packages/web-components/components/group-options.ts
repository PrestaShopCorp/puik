import { defineCustomElement } from 'vue';
import { PuikGroupOptions } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikGroupOptionsCe = defineCustomElement(PuikGroupOptions) as CustomElementWithName;
PuikGroupOptionsCe.ceName = 'puik-group-options-ce';

export default PuikGroupOptionsCe;
