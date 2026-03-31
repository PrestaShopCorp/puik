import type { RouteLocationRaw } from 'vue-router';
import type TabNavigationTitle from './tab-navigation-title.vue';

export interface TabNavigationTitleProps {
  disabled?: boolean
  position: number
  to?: RouteLocationRaw
}

export type TabNavigationTitleInstance = InstanceType<typeof TabNavigationTitle>;
