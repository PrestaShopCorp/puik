import { defineCustomElement } from 'vue';
import { PuikAvatar } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import avatarStyles from '@prestashopcorp/puik-theme/puik-avatar.css?inline';

const PuikAvatarCe = defineCustomElement(PuikAvatar,
  {
    styles: [baseStyles, avatarStyles]
  }
) as CustomElementWithName;
PuikAvatarCe.ceName = 'puik-avatar-ce';

export default PuikAvatarCe;
