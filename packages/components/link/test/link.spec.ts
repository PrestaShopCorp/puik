import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikLink } from '@prestashopcorp/puik-components';
import type { ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { ExtractComponentPropType } from '@prestashopcorp/puik-utils';

type PuikLinkProps = ExtractComponentPropType<typeof PuikLink>;

describe('Link tests', () => {
  let wrapper: VueWrapper<any>;
  const findLink = () => wrapper.find('.puik-link');
  const factory = (
    props?: PuikLinkProps,
    options?: ComponentMountingOptions<PuikLinkProps>
  ) => {
    wrapper = mount(PuikLink, {
      props,
      ...options
    });
  };
  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });

  it('should be a router-link if to prop is defined', () => {
    factory({ to: '/test' });
    expect(findLink().element.tagName).toBe('ROUTER-LINK');
  });

  it('should be a link if href prop is defined', () => {
    factory({ href: '/test' });
    expect(findLink().element.tagName).toBe('A');
  });

  it('should have size class', () => {
    factory({ href: '/test', size: 'sm' });
    expect(findLink().classes()).toContain('puik-link--sm');
  });
});
