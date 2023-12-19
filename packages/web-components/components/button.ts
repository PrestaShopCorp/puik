import { defineCustomElement } from 'vue';
import { PuikButton } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

// PuikButton.styles = ['@import url(\'/home/mattgoud/squad-compliance/puik/packages/web-components/node_modules/@prestashopcorp/puik-theme/dist/puik-button.css\')'];

const PuikButtonCe = defineCustomElement(PuikButton) as CustomElementWithTagName;
PuikButtonCe.tagName = 'puik-button-ce';

export default PuikButtonCe;
