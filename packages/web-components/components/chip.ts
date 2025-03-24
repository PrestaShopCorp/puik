import { defineCustomElement } from 'vue';
import { PuikChip } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-chip.css';

const PuikChipCe = defineCustomElement(PuikChip) as CustomElementWithName;
PuikChipCe.ceName = 'puik-chip-ce';

export default PuikChipCe;
