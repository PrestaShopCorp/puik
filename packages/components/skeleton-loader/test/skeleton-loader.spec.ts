import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikSkeletonLoader, SkeletonLoaderProps } from '@prestashopcorp/puik-components';

describe('SkeletonLoader tests', () => {
  let wrapper: VueWrapper<any>;
  const getSkeletonLoader = () => wrapper.find<HTMLElement>('.puik-skeleton-loader');
  const factory = (
    props?: SkeletonLoaderProps,
    options?: ComponentMountingOptions<typeof PuikSkeletonLoader>
  ) => {
    wrapper = mount(PuikSkeletonLoader, {
      props,
      ...options
    });
  };
  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });
  it('should display the skeleton loader with variant h1', () => {
    const variant = 'h1';
    factory({ variant });
    expect(getSkeletonLoader().classes()).toContain(
      `puik-skeleton-loader--${variant}`
    );
  });
  it('should display with specific height', () => {
    const height = '100px';
    factory({ height });
    expect(getSkeletonLoader().element.style.height).toBe(height);
  });
  it('should display with specific width', () => {
    const width = '100px';
    factory({ width });
    expect(getSkeletonLoader().element.style.width).toBe(width);
  });
  it('should display as span', () => {
    const tag = 'span';
    factory({ tag });
    expect(getSkeletonLoader().element.tagName).toBe(tag.toUpperCase());
  });
});
