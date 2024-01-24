import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikLink, LinkProps } from '@prestashopcorp/puik-components';

describe('Link tests', () => {
  let wrapper: VueWrapper<any>;
  const findLink = () => wrapper.find('.puik-link');
  const factory = (
    props?: LinkProps,
    options?: ComponentMountingOptions<typeof PuikLink>
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

  it('should have a data-test attribute', () => {
    factory({ href: '/test', dataTest: 'test' });
    expect(findLink().attributes('data-test')).toBe('test');
  });

  it('should set the link in high-contrast mode', () => {
    factory({ highContrast: true });
    expect(findLink().classes()).toContain('puik-link--high-contrast');
  });
});
