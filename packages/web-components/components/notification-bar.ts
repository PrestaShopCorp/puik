import { defineCustomElement } from 'vue';
import { PuikNotificationBar } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import notificationBarStyles from '@prestashopcorp/puik-theme/puik-notification-bar.css?inline';

const PuikNotificationBarCe = defineCustomElement(PuikNotificationBar,
  {
    styles: [preflightStyles, baseStyles, notificationBarStyles]
  }
) as CustomElementWithName;
PuikNotificationBarCe.ceName = 'puik-notification-bar-ce';

export default PuikNotificationBarCe;
