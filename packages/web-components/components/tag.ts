import { defineCustomElement } from 'vue';
import { PuikTag } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikTagCe = defineCustomElement(PuikTag) as CustomElementWithTagName;
PuikTagCe.tagName = 'puik-tag-ce';

export default PuikTagCe;
