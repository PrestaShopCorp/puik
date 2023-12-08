import { defineCustomElement } from 'vue';
import { PuikModal } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikModalCe = defineCustomElement(PuikModal) as unknown as CustomElementWithTagName;
PuikModalCe.tagName = 'puik-modal-ce';

export default PuikModalCe;
