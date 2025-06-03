import { defineCustomElement } from 'vue';
import { PuikModal } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import modalStyles from '@prestashopcorp/puik-theme/puik-modal.css?inline';
import buttonStyles from '@prestashopcorp/puik-theme/puik-button.css?inline';
import iconStyles from '@prestashopcorp/puik-theme/puik-icon.css?inline';
import tooltipStyles from '@prestashopcorp/puik-theme/puik-tooltip.css?inline';

const PuikModalCe = defineCustomElement(PuikModal,
  {
    styles: [preflightStyles, baseStyles, modalStyles, buttonStyles, iconStyles, tooltipStyles]
  }
) as CustomElementWithName;
PuikModalCe.ceName = 'puik-modal-ce';

export default PuikModalCe;
