import { defineCustomElement } from 'vue';
import { PuikAvatar } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikAvatarCe = defineCustomElement(PuikAvatar) as CustomElementWithName;
PuikAvatarCe.ceName = 'puik-avatar-ce';

export default PuikAvatarCe;
