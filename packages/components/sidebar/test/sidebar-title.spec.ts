import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikSidebar, PuikSidebarTitle } from '@prestashopcorp/puik-components';

let wrapper: VueWrapper<any>;
const factory = (template: string, options: ComponentMountingOptions<any> = {}) => {
  wrapper = mount({
    components: {
      PuikSidebar,
      PuikSidebarTitle
    },
    template,
    ...options
  });
};

const getTitle = () => wrapper.find('.puik-sidebar-title');

describe('Sidebar tests', () => {
  it('should be a vue instance', () => {
    const template = `
      <puik-sidebar-title>Title</puik-sidebar-title>
    `;
    factory(template);
    expect(wrapper).toBeTruthy();
  });

  it('should render according to tag props', () => {
    const template = `
      <puik-sidebar :expanded="true">
        <puik-sidebar-title tag="span">Title</puik-sidebar-title>
      </puik-sidebar>
    `;
    factory(template);
    expect(getTitle().element.tagName).toBe('SPAN');
  });
});
