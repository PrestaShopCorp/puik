import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikSidebar, PuikSidebarItem, PuikSidebarGroupItem } from '@prestashopcorp/puik-components';

let wrapper: VueWrapper<any>;
const factory = (template: string, options: ComponentMountingOptions<any> = {}) => {
  wrapper = mount({
    components: {
      PuikSidebar,
      PuikSidebarGroupItem,
      PuikSidebarItem
    },
    template,
    ...options
  });
};

const getSidebarGroupItemContainer = () =>
  wrapper.find('.puik-sidebar-group-item');
const getIcon = () => wrapper.find('.puik-sidebar-group-item .puik-icon');
const getAccordion = () => wrapper.find('.puik-sidebar-group-item__accordion');
const getAccordionTitle = () =>
  wrapper.find('.puik-accordion__header__content__title');
const getMenuButton = () =>
  wrapper.find('.puik-sidebar-group-item__menu-button');
const getMenuContent = () =>
  wrapper.find('.puik-sidebar-group-item__menu-content');

describe('Sidebar tests', () => {
  it('should be a vue instance', () => {
    const template = `
      <puik-sidebar-group-item title="group" icon="store">
        <puik-sidebar-item title="title" />
      </puik-sidebar-group-item>
    `;
    factory(template);
    expect(wrapper).toBeTruthy();
  });

  it('should be active', () => {
    const template = `
      <puik-sidebar-group-item title="group" icon="store" active>
        <puik-sidebar-item title="title" />
      </puik-sidebar-group-item>
    `;
    factory(template);
    expect(wrapper.classes()).toContain('puik-sidebar-group-item--active');
  });

  it('should render a title when the sidebar is expanded', () => {
    const template = `
      <puik-sidebar :expanded="true">
        <puik-sidebar-group-item title="title" icon="home" />
      </puik-sidebar>
    `;
    factory(template);
    expect(getAccordionTitle().text()).toBe('title');
  });

  it('should render an icon when expanded', () => {
    const template = `
      <puik-sidebar :expanded="true">
        <puik-sidebar-group-item title="group" icon="store">
        </puik-sidebar-group-item>
      </puik-sidebar>
    `;
    factory(template);
    expect(getIcon().text()).toBe('store');
  });

  it('should render an icon when collapsed', () => {
    const template = `
      <puik-sidebar :expanded="false">
        <puik-sidebar-group-item title="group" icon="store">
        </puik-sidebar-group-item>
      </puik-sidebar>
    `;
    factory(template);
    expect(getIcon().text()).toBe('store');
  });

  it('should render as a menu when collapsed', () => {
    const template = `
      <puik-sidebar :expanded="false">
        <puik-sidebar-group-item title="group" icon="store">
        </puik-sidebar-group-item>
      </puik-sidebar>
    `;
    factory(template);
    expect(getMenuButton().exists()).toBeTruthy();
  });

  it('should render as an accordion when expanded', () => {
    const template = `
      <puik-sidebar :expanded="true">
        <puik-sidebar-group-item title="group" icon="store">
        </puik-sidebar-group-item>
      </puik-sidebar>
    `;
    factory(template);
    expect(getAccordion().exists()).toBeTruthy();
  });

  it('should render menu content when collapsed', async () => {
    const template = `
      <puik-sidebar :expanded="false">
        <puik-sidebar-group-item title="group" icon="store">
          <puik-sidebar-item icon="home" title="title"></puik-sidebar-item>
        </puik-sidebar-group-item>
      </puik-sidebar>
    `;
    factory(template);
    await getMenuButton().trigger('click');
    expect(getMenuContent().exists()).toBeTruthy();
  });

  it('should render data-test attribute on container div', async () => {
    const template = `
      <puik-sidebar>
        <puik-sidebar-group-item title="group" icon="store" data-test="test">
          <puik-sidebar-item icon="home" title="title"></puik-sidebar-item>
        </puik-sidebar-group-item>
      </puik-sidebar>
    `;
    factory(template);
    expect(getSidebarGroupItemContainer().attributes('data-test')).toBe('test');
  });
});
