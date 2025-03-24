import { defineCustomElement } from 'vue';
import { PuikModal } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-modal.css';
import '@prestashopcorp/puik-theme/puik-button.css';
import '@prestashopcorp/puik-theme/puik-icon.css';
import '@prestashopcorp/puik-theme/puik-tooltip.css';

const PuikModalCe = defineCustomElement(PuikModal) as CustomElementWithName;
PuikModalCe.ceName = 'puik-modal-ce';

export default PuikModalCe;
