import '@prestashopcorp/puik-components/tab-navigation-title/style/css';
import type TabNavigationTitle from './tab-navigation-title.vue';

export interface TabNavigationTitleProps {
  disabled?: boolean
  position: number
}

export type TabNavigationTitleInstance = InstanceType<typeof TabNavigationTitle>;
