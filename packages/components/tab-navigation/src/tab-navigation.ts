import '@prestashopcorp/puik-components/tab-navigation/style/css';
import type { InjectionKey, Ref } from 'vue';
import type TabNavigation from './tab-navigation.vue';

export interface TabNavigationProps {
  name: string
  defaultPosition?: number
}

export type TabNavigationInstance = InstanceType<typeof TabNavigation>;

export type currentTabKeyContext = {
  name: Ref<string>
  numberOfTabs: Ref<number>
  currentPosition: Ref<number>
  keyEventDirection: Ref<string | null | undefined>
  handleTabClick: (index: number) => void
};

export const currentTabKey: InjectionKey<currentTabKeyContext> =
  Symbol('current-tab');
