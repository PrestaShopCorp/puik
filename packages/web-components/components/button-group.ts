import { defineCustomElement } from 'vue';
import { PuikButtonGroup } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-button-group.css';

const PuikButtonGroupCe = defineCustomElement(PuikButtonGroup) as CustomElementWithName;
PuikButtonGroupCe.ceName = 'puik-button-group-ce';

export default PuikButtonGroupCe;
