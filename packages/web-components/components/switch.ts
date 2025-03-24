import { defineCustomElement } from 'vue';
import { PuikSwitch } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-switch.css';

const PuikSwitchCe = defineCustomElement(PuikSwitch) as CustomElementWithName;
PuikSwitchCe.ceName = 'puik-switch-ce';

export default PuikSwitchCe;
