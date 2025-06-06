import { defineCustomElement, type DefineComponent } from 'vue';
import { PuikAlert } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import alertStyles from '@prestashopcorp/puik-theme/puik-alert.css?inline';
import buttonStyles from '@prestashopcorp/puik-theme/puik-button.css?inline';
import iconStyles from '@prestashopcorp/puik-theme/puik-icon.css?inline';
import linkStyles from '@prestashopcorp/puik-theme/puik-link.css?inline';

const PuikAlertCe = defineCustomElement(PuikAlert as DefineComponent<unknown, any, any, any>,
  {
    styles: [preflightStyles, baseStyles, alertStyles, buttonStyles, iconStyles, linkStyles]
  }
) as CustomElementWithName;
PuikAlertCe.ceName = 'puik-alert-ce';

export default PuikAlertCe;
