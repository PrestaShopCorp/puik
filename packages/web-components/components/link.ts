import { defineCustomElement } from 'vue';
import { PuikLink } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikLinkCe = defineCustomElement(PuikLink) as CustomElementWithName;
PuikLinkCe.ceName = 'puik-link-ce';

export default PuikLinkCe;
