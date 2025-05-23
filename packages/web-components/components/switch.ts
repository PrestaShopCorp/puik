import { defineCustomElement } from 'vue';
import { PuikSwitch } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import switchStyles from '@prestashopcorp/puik-theme/puik-switch.css?inline';

const PuikSwitchCe = defineCustomElement(PuikSwitch,
  {
    styles: [preflightStyles, baseStyles, switchStyles]
  }
) as CustomElementWithName;
PuikSwitchCe.ceName = 'puik-switch-ce';

export default PuikSwitchCe;
