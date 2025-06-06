import { defineCustomElement, type DefineComponent } from 'vue';
import { PuikSnackbar } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import snackbarStyles from '@prestashopcorp/puik-theme/puik-snackbar.css?inline';

const PuikSnackbarCe = defineCustomElement(PuikSnackbar as DefineComponent<unknown, any, any, any>,
  {
    styles: [preflightStyles, baseStyles, snackbarStyles]
  }
) as CustomElementWithName;
PuikSnackbarCe.ceName = 'puik-snackbar-ce';

export default PuikSnackbarCe;
