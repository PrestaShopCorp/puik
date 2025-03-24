import { defineCustomElement } from 'vue';
import { PuikAvatar } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-avatar.css';

const PuikAvatarCe = defineCustomElement(PuikAvatar) as CustomElementWithName;
PuikAvatarCe.ceName = 'puik-avatar-ce';

export default PuikAvatarCe;
