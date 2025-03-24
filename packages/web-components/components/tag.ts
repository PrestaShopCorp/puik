import { defineCustomElement } from 'vue';
import { PuikTag } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-tag.css';

const PuikTagCe = defineCustomElement(PuikTag) as CustomElementWithName;
PuikTagCe.ceName = 'puik-tag-ce';

export default PuikTagCe;
