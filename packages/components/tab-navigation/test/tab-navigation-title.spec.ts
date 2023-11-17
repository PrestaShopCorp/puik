import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import {
  PuikTabNavigation,
  PuikTabNavigationGroupTitles,
  PuikTabNavigationGroupPanels,
  PuikTabNavigationTitle,
  PuikTabNavigationPanel
} from '..';
import type { MountingOptions, VueWrapper } from '@vue/test-utils';

let wrapper: VueWrapper<any>;
const factory = (template: string, options: MountingOptions<any> = {}) => {
  wrapper = mount({
    components: {
      PuikTabNavigation,
      PuikTabNavigationGroupTitles,
      PuikTabNavigationGroupPanels,
      PuikTabNavigationTitle,
      PuikTabNavigationPanel
    },
    template,
    ...options
  });
};

const getTabNavigationTitleComponent = () =>
  wrapper.findComponent(PuikTabNavigationTitle);
const getTabNavigationTitleHtml = () =>
  wrapper.findAll('.puik-tab-navigation__title ');

const template = `
<puik-tab-navigation name="name-example" :default-position="2">
  <puik-tab-navigation-group-titles aria-label="aria-label-example">
    <puik-tab-navigation-title :position="1">
      title 1
    </puik-tab-navigation-title>
    <puik-tab-navigation-title :position="2">
      title 2
    </puik-tab-navigation-title>
    <puik-tab-navigation-title :position="3" disabled>
      title 3
    </puik-tab-navigation-title>
  </puik-tab-navigation-group-titles>

  <puik-tab-navigation-group-panels>
    <puik-tab-navigation-panel :position="1">
    Content 1
    </puik-tab-navigation-panel>
    <puik-tab-navigation-panel :position="2">
    Content 2
    </puik-tab-navigation-panel>
    <puik-tab-navigation-panel :position="3">
    Content 3
    </puik-tab-navigation-panel>
  </puik-tab-navigation-group-panels>
</puik-tab-navigation>
`;
describe('TabNavigation tests', () => {
  it('should be a vue instance', () => {
    factory(template);
    expect(getTabNavigationTitleComponent).toBeTruthy();
  });
  it('As disabled prop value is true for tab-3, tab-3 should be disabled', () => {
    factory(template);
    const disabledTab = getTabNavigationTitleHtml()[2];
    expect(disabledTab.classes()).toContain(
      'puik-tab-navigation__title--disabled'
    );
  });
});
