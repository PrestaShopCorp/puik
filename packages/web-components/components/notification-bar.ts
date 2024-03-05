import { defineCustomElement } from 'vue';
import { PuikNotificationBar } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikNotificationBarCe = defineCustomElement(PuikNotificationBar) as CustomElementWithName;
PuikNotificationBarCe.ceName = 'puik-notification-bar-ce';

export default PuikNotificationBarCe;
