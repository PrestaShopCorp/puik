import { defineCustomElement } from 'vue';
import { PuikCheckbox } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikCheckboxCe = defineCustomElement(PuikCheckbox) as unknown as CustomElementWithTagName;
PuikCheckboxCe.tagName = 'puik-checkbox-ce';

export default PuikCheckboxCe;
