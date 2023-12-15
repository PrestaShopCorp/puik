import { defineCustomElement } from 'vue';
import { PuikInput } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikInputCe = defineCustomElement(PuikInput) as CustomElementWithTagName;
PuikInputCe.tagName = 'puik-input-ce';

export default PuikInputCe;
