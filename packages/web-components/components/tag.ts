import { defineCustomElement } from 'vue';
import { PuikTag } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikTagCe = defineCustomElement(PuikTag) as CustomElementWithName;
PuikTagCe.ceName = 'puik-tag-ce';

export default PuikTagCe;
