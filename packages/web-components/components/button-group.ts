import { defineCustomElement } from 'vue';
import { PuikButtonGroup } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikButtonGroupCe = defineCustomElement(PuikButtonGroup) as CustomElementWithTagName;
PuikButtonGroupCe.tagName = 'puik-button-group-ce';

export default PuikButtonGroupCe;
