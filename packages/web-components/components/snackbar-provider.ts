import { defineCustomElement } from 'vue';
import { PuikSnackbarProvider } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import snackbarProviderStyles from '@prestashopcorp/puik-theme/puik-snackbar-provider.css?inline';

const PuikSnackbarProviderCe = defineCustomElement(PuikSnackbarProvider,
  {
    styles: [preflightStyles, baseStyles, snackbarProviderStyles]
  }
) as CustomElementWithName;
PuikSnackbarProviderCe.ceName = 'puik-snackbar-provider-ce';

export default PuikSnackbarProviderCe;
