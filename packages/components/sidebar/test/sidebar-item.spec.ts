import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikSidebar, PuikSidebarItem, PuikMenuItem } from '@prestashopcorp/puik-components';

let wrapper: VueWrapper<any>;
const factory = (template: string, options: ComponentMountingOptions<any> = {}) => {
  wrapper = mount({
    components: {
      PuikSidebarItem,
      PuikSidebar,
      PuikMenuItem
    },
    template,
    ...options
  });
};

const getSideBarItem = () => wrapper.find('.puik-sidebar-item');
const getSideBarItemLabel = () => wrapper.find('.puik-sidebar-item span');
const getItemButton = () => wrapper.find('.puik-sidebar-item__button');

describe('Sidebar tests', () => {
  it('should be a vue instance', () => {
    const template = `
      <puik-sidebar-item title="title" />
    `;
    factory(template);
    expect(wrapper).toBeTruthy();
  });

  it('should be active', () => {
    const template = `
      <puik-sidebar-item title="title" active />
    `;
    factory(template);
    expect(wrapper.classes()).toContain('puik-sidebar-item--active');
  });

  it('should render as a router-link', () => {
    const template = `
      <puik-sidebar-item title="title" to="/test" />
    `;
    factory(template);
    expect(getItemButton().element.tagName).toBe('ROUTER-LINK');
  });

  it('should render as a link', () => {
    const template = `
      <puik-sidebar-item title="title" href="/test" />
    `;
    factory(template);
    expect(getItemButton().element.tagName).toBe('A');
  });

  it('should not render a title when the sidebar is collapsed', () => {
    const template = `
      <puik-sidebar :expanded="false">
        <puik-sidebar-item title="title" />
      </puik-sidebar>
    `;
    factory(template);
    expect(getItemButton().text()).not.toBe('title');
  });

  it('should render a title when the sidebar is expanded', () => {
    const template = `
      <puik-sidebar :expanded="true">
        <puik-sidebar-item title="title" />
      </puik-sidebar>
    `;
    factory(template);
    expect(getItemButton().text()).toBe('title');
  });

  it('should render a data-test attribute on sidebar item button and label (if sidebar is expanded)', () => {
    const template = `
      <puik-sidebar :expanded="true">
        <puik-sidebar-item title="title" data-test="test"/>
      </puik-sidebar>
    `;
    factory(template);
    expect(getSideBarItem().attributes('data-test')).toBe('buttonTitle-test');
    expect(getSideBarItemLabel().attributes('data-test')).toBe('title-test');
  });
});
