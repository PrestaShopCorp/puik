import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import {
  PuikTabNavigation,
  PuikTabNavigationGroupTitles,
  PuikTabNavigationGroupPanels,
  PuikTabNavigationTitle,
  PuikTabNavigationPanel
} from '@prestashopcorp/puik-components';
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

const getTabNavigationHtml = () => wrapper.find('.puik-tab-navigation');
const getTabNavigationComponent = () => wrapper.findComponent(PuikTabNavigation);
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
    expect(getTabNavigationComponent()).toBeTruthy();
  });

  it('As defaultPosition prop value is 2, tab-2 should be selected', () => {
    factory(template);
    const tab2 = getTabNavigationTitleHtml()[1];
    expect(tab2.classes()).toContain('puik-tab-navigation__title--selected');
  });

  it('As name prop value is "name-example", id attribute of puik-tab-navigation should be "name-example"', () => {
    factory(template);
    expect(getTabNavigationHtml().attributes().id).toBe('name-example');
  });

  it('should not select disabled tab', async () => {
    factory(template);
    const tab3 = getTabNavigationTitleHtml()[2];
    await tab3.trigger('click');
    expect(tab3.classes()).not.toContain('puik-tab-navigation__title--selected');
  });

  it('should change active tab when a tab is clicked', async () => {
    factory(template);
    const tab1 = getTabNavigationTitleHtml()[0];
    await tab1.trigger('click');
    expect(tab1.classes()).toContain('puik-tab-navigation__title--selected');
  });
});
