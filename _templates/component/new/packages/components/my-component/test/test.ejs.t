---
to: packages/components/<%= h.changeCase.param(name) %>/test/<%= h.changeCase.param(name) %>.spec.ts
---
import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { Puik<%= h.changeCase.pascal(name) %>, <%= h.changeCase.pascal(name) %>Props } from '@prestashopcorp/puik-components';

describe('<%= h.changeCase.pascal(name) %> tests', () => {
  let wrapper: VueWrapper<any>;
  const factory = (
    props: <%= h.changeCase.pascal(name) %>Props,
    options: ComponentMountingOptions<typeof Puik<%= h.changeCase.pascal(name) %>>
  ) => {
    wrapper = mount(Puik<%= h.changeCase.pascal(name) %>, {
      props,
      ...options
    });
  };
  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });
});
