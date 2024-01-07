import { defineCustomElement } from 'vue';
import { PuikSwitch } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikSwitchCe = defineCustomElement(PuikSwitch) as CustomElementWithName;
PuikSwitchCe.ceName = 'puik-switch-ce';

export default PuikSwitchCe;
