import { defineCustomElement } from 'vue';
import { PuikChip } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikChipCe = defineCustomElement(PuikChip) as unknown as CustomElementWithTagName;
PuikChipCe.tagName = 'puik-chip-ce';

export default PuikChipCe;
