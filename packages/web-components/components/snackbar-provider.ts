import { defineCustomElement } from 'vue';
import { PuikSnackbarProvider } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import snackbarProviderStyles from '@prestashopcorp/puik-theme/puik-snackbar-provider.css?inline';

const PuikSnackbarProviderCe = defineCustomElement(PuikSnackbarProvider,
  {
    styles: [baseStyles, snackbarProviderStyles]
  }
) as CustomElementWithName;
PuikSnackbarProviderCe.ceName = 'puik-snackbar-provider-ce';

export default PuikSnackbarProviderCe;
