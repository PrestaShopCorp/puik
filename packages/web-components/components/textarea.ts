import { defineCustomElement } from 'vue';
import { PuikTextarea } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikTextareaCe = defineCustomElement(PuikTextarea) as CustomElementWithTagName;
PuikTextareaCe.tagName = 'puik-textarea-ce';

export default PuikTextareaCe;
