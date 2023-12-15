import { defineCustomElement } from 'vue';
import { PuikSwitch } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikSwitchCe = defineCustomElement(PuikSwitch) as CustomElementWithTagName;
PuikSwitchCe.tagName = 'puik-switch-ce';

export default PuikSwitchCe;
