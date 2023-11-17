import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PuikSidebar from '../src/sidebar.vue';
import PuikSidebarGroupItem from '../src/sidebar-group-item.vue';
import PuikSidebarItem from '../src/sidebar-item.vue';
import PuikSidebarTitle from '../src/sidebar-title.vue';
import type { MountingOptions, VueWrapper } from '@vue/test-utils';

let wrapper: VueWrapper<any>;
const factory = (template: string, options: MountingOptions<any> = {}) => {
  wrapper = mount({
    components: {
      PuikSidebarTitle,
      PuikSidebarItem,
      PuikSidebarGroupItem,
      PuikSidebar
    },
    template,
    ...options
  });
};

const getSidebar = () => wrapper.find('.puik-sidebar');
const getSidebarsItem = () => wrapper.findAll('.puik-sidebar-item');
const getExpandButton = () => wrapper.find('.puik-sidebar__header .puik-button');
const getSidebarBackdrop = () => wrapper.find('.puik-sidebar__backdrop');

describe('Sidebar tests', () => {
  it('should be a vue instance', () => {
    const template = `
      <puik-sidebar>
        <puik-sidebar-group-item title="group" icon="store">
          <puik-sidebar-item title="title" />
        </puik-sidebar-group-item>
      </puik-sidebar>
    `;
    factory(template);
    expect(wrapper).toBeTruthy();
  });

  it('should expand', async () => {
    const template = `
      <puik-sidebar>
        <puik-sidebar-group-item title="group" icon="store">
          <puik-sidebar-item title="title" />
        </puik-sidebar-group-item>
      </puik-sidebar>
    `;
    await factory(template);
    const expandButton = getExpandButton();
    expect(getSidebar().classes()).toContain('puik-sidebar--collapsed');
    await expandButton.trigger('click');
    expect(getSidebar().classes()).not.toContain('puik-sidebar--collapsed');
  });

  it('should expand with v-model', async () => {
    const template = `
      <puik-sidebar :expanded="false">
        <puik-sidebar-group-item title="group" icon="store" name="group-1">
          <puik-sidebar-item title="title" />
        </puik-sidebar-group-item>
      </puik-sidebar>
    `;

    await factory(template);
    expect(getSidebar().classes()).toContain('puik-sidebar--collapsed');
    await wrapper.setProps({ expanded: true });
    expect(getSidebar().classes()).not.toContain('puik-sidebar--collapsed');
  });

  it('should be mobile', async () => {
    const template = `
      <puik-sidebar mobile :expanded="true">
        <puik-sidebar-item title="title" />
      </puik-sidebar>
    `;
    factory(template);
    const items = getSidebarsItem()[0];
    expect(items.exists()).toBeTruthy();
    const backdrop = getSidebarBackdrop();
    expect(backdrop).toBeTruthy();
  });

  it('should have group-1 open by default', async () => {
    const template = `
      <puik-sidebar open-accordion="group-1" :expanded="true">
        <puik-sidebar-group-item title="group" icon="store" name="group-1">
          <puik-sidebar-item title="title" />
        </puik-sidebar-group-item>
      </puik-sidebar>
    `;

    await factory(template);
    const accordion = wrapper.find('.puik-accordion');
    expect(accordion.classes()).toContain('puik-accordion--expanded');
  });

  it('should open props accordion as default', async () => {
    const template = `
      <puik-sidebar open-accordion="group-1" :expanded="true">
        <puik-sidebar-group-item title="group" icon="store" name="group-1">
          <puik-sidebar-item title="title" />
        </puik-sidebar-group-item>
        <puik-sidebar-group-item title="group" icon="store" name="group-2">
          <puik-sidebar-item title="title" />
        </puik-sidebar-group-item>
      </puik-sidebar>
    `;

    await factory(template);
    const accordion = wrapper.findAll('.puik-accordion');
    expect(accordion[0].classes()).toContain('puik-accordion--expanded');
    expect(accordion[1].classes()).not.toContain('puik-accordion--expanded');
    await wrapper.setProps({ openAccordion: 'group-2' });
    expect(accordion[1].classes()).toContain('puik-accordion--expanded');
    expect(accordion[0].classes()).not.toContain('puik-accordion--expanded');
  });
});
