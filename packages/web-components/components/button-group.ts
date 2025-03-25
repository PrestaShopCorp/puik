import { defineCustomElement } from 'vue';
import { PuikButtonGroup } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import buttonGroupStyles from '@prestashopcorp/puik-theme/puik-button-group.css?inline';

const PuikButtonGroupCe = defineCustomElement(PuikButtonGroup,
  {
    styles: [baseStyles, buttonGroupStyles]
  }
) as CustomElementWithName;
PuikButtonGroupCe.ceName = 'puik-button-group-ce';

export default PuikButtonGroupCe;
