import { defineCustomElement } from 'vue';
import { PuikRadio } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikRadioCe = defineCustomElement(PuikRadio) as CustomElementWithTagName;
PuikRadioCe.tagName = 'puik-radio-ce';

export default PuikRadioCe;
