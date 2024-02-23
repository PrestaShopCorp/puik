import { defineCustomElement } from 'vue';
import { PuikSnackbar } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikSnackbarCe = defineCustomElement(PuikSnackbar) as CustomElementWithName;
PuikSnackbarCe.ceName = 'puik-snackbar-ce';

export default PuikSnackbarCe;
