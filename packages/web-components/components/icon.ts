import { defineCustomElement } from 'vue';
import { PuikIcon } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikIconCe = defineCustomElement(PuikIcon) as unknown as CustomElementWithTagName;
PuikIconCe.tagName = 'puik-icon-ce';

export default PuikIconCe;
