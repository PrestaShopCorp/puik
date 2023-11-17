import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikSidebar, PuikSidebarItem } from '../..';
import type { MountingOptions, VueWrapper } from '@vue/test-utils';

let wrapper: VueWrapper<any>;
const factory = (template: string, options: MountingOptions<any> = {}) => {
  wrapper = mount({
    components: {
      PuikSidebarItem,
      PuikSidebar
    },
    template,
    ...options
  });
};

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
});
