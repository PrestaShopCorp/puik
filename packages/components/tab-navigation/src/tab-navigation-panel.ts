import '../../tab-navigation-panel/style';
import type TabNavigationPanel from './tab-navigation-panel.vue';

export interface TabNavigationPanelProps {
  position: number
}

export type TabNavigationPanelInstance = InstanceType<typeof TabNavigationPanel>;
