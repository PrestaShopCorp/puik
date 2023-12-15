import { defineCustomElement } from 'vue';
import { PuikLink } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikLinkCe = defineCustomElement(PuikLink) as CustomElementWithTagName;
PuikLinkCe.tagName = 'puik-link-ce';

export default PuikLinkCe;
