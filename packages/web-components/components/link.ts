import { defineCustomElement } from 'vue';
import { PuikLink } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-link.css';

const PuikLinkCe = defineCustomElement(PuikLink) as CustomElementWithName;
PuikLinkCe.ceName = 'puik-link-ce';

export default PuikLinkCe;
