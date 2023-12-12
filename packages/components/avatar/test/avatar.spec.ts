import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
import { PuikAvatar, AvatarProps, PuikAvatarVariants, PuikAvatarSizes } from '@prestashopcorp/puik-components';

describe('Avatar tests', () => {
  let wrapper: VueWrapper<any>;
  const findAvatar = () => wrapper.find('.puik-avatar');
  const findFallbackWrapper = () => wrapper.find('.puik-avatar__fallback');
  const findImg = () => wrapper.find('.puik-avatar img');

  const mockImage = {
    src: null,
    onload: () => {},
    onerror: () => {}
  };

  beforeEach(() => {
    window.Image = function() { return mockImage; };
  });

  const factory = (
    props?: AvatarProps,
    options?: ComponentMountingOptions<typeof PuikAvatar>
  ) => {
    wrapper = mount(PuikAvatar, {
      props,
      ...options
    });
  };
  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });

  it('should display the avatar in reverse mode', () => {
    factory({ variant: PuikAvatarVariants.Reverse });
    expect(findFallbackWrapper().classes()).toContain('puik-avatar__fallback--reverse');
  });

  it('should display the avatar in large size', () => {
    factory({ size: PuikAvatarSizes.Large });
    expect(findAvatar().classes()).toContain('puik-avatar--large');
  });

  it('should display the initials "PA"', () => {
    factory({}, {
      slots: {
        fallback: 'PA'
      }
    });
    expect(findFallbackWrapper().text()).toBe('PA');
  });

  it('photo type avatar should display an image with src attribute set to "src-img" and an attribute alt set to "alt-img"', () => {
    factory({ src: 'https://picsum.photos/id/64/200', alt: 'alt-img' });
    mockImage.onload();
    expect(findImg().attributes().src).toBe('https://picsum.photos/id/64/200');
    expect(findImg().attributes().alt).toBe('alt-img');
  });

  it('should have data-test attribute on initials wrapper', () => {
    factory({
      dataTest: 'example'
    });
    expect(findFallbackWrapper().attributes('data-test')).toBe(
      'avatar-fallback-example'
    );
  });

  it('should have data-test attribute on image', () => {
    factory({
      src: 'https://picsum.photos/id/64/200',
      alt: 'alt-example',
      dataTest: 'example'
    });
    expect(findImg().attributes('data-test')).toBe('avatar-image-example');
  });
});
