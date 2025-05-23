import { defineCustomElement } from 'vue';
import { PuikAvatar } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import avatarStyles from '@prestashopcorp/puik-theme/puik-avatar.css?inline';

const PuikAvatarCe = defineCustomElement(PuikAvatar,
  {
    styles: [preflightStyles, baseStyles, avatarStyles]
  }
) as CustomElementWithName;
PuikAvatarCe.ceName = 'puik-avatar-ce';

export default PuikAvatarCe;
