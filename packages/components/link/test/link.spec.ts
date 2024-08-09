import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikLink, LinkProps, PuikLinkTargetVariants } from '@prestashopcorp/puik-components';

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

  it('should set the link in articles mode', () => {
    factory({ articles: true });
    expect(findLink().classes()).toContain('puik-link--articles');
  });

  it('should have a title attribute', () => {
    factory({ href: '/test', title: 'Test Title' });
    expect(findLink().attributes('title')).toBe('Test Title');
  });

  it('should have an aria-label attribute', () => {
    factory({ href: '/test', ariaLabel: 'Test Aria Label' });
    expect(findLink().attributes('aria-label')).toBe('Test Aria Label');
  });

  it('should display target icon when target is _blank', () => {
    factory({ target: PuikLinkTargetVariants.Blank });
    expect(wrapper.find('.puik-link__target__icon').exists()).toBe(true);
  });

  it('should have default size class', () => {
    factory({ href: '/test' });
    expect(findLink().classes()).toContain('puik-link--md');
  });

  it('should apply dynamic classes based on props', () => {
    factory({ href: '/test', highContrast: true, articles: true });
    expect(findLink().classes()).toContain('puik-link--high-contrast');
    expect(findLink().classes()).toContain('puik-link--articles');
  });

  it('should pass the correct prop to router-link', () => {
    factory({ to: '/test' });
    expect(wrapper.vm.$props.to).toBe('/test');
  });

  it('should pass the correct prop to anchor tag', () => {
    factory({ href: '/test' });
    expect(wrapper.vm.$props.href).toBe('/test');
  });
});
