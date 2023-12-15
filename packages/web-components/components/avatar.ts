import { defineCustomElement } from 'vue';
import { PuikAvatar } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikAvatarCe = defineCustomElement(PuikAvatar) as CustomElementWithTagName;
PuikAvatarCe.tagName = 'puik-avatar-ce';

export default PuikAvatarCe;
