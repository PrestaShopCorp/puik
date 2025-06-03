import { defineCustomElement } from 'vue';
import { PuikTag } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import tagStyles from '@prestashopcorp/puik-theme/puik-tag.css?inline';

const PuikTagCe = defineCustomElement(PuikTag,
  {
    styles: [preflightStyles, baseStyles, tagStyles]
  }
) as CustomElementWithName;
PuikTagCe.ceName = 'puik-tag-ce';

export default PuikTagCe;
