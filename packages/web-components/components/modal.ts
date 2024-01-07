import { defineCustomElement } from 'vue';
import { PuikModal } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikModalCe = defineCustomElement(PuikModal) as CustomElementWithName;
PuikModalCe.ceName = 'puik-modal-ce';

export default PuikModalCe;
