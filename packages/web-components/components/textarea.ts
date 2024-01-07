import { defineCustomElement } from 'vue';
import { PuikTextarea } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikTextareaCe = defineCustomElement(PuikTextarea) as CustomElementWithName;
PuikTextareaCe.ceName = 'puik-textarea-ce';

export default PuikTextareaCe;
