import { defineCustomElement } from 'vue';
import { PuikSnackbarProvider } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikSnackbarProviderCe = defineCustomElement(PuikSnackbarProvider) as CustomElementWithName;
PuikSnackbarProviderCe.ceName = 'puik-snackbar-provider-ce';

export default PuikSnackbarProviderCe;
