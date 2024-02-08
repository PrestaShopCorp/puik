import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikAvatar, AvatarProps } from '@prestashopcorp/puik-components';

describe('Avatar tests', () => {
  let wrapper: VueWrapper<any>;
  const findAvatar = () => wrapper.find('.puik-avatar');
  const findInitialsWrapper = () => wrapper.find('.puik-avatar_initials');
  const findIcon = () => wrapper.find('.puik-icon');
  const findImg = () => wrapper.find('.puik-avatar img');

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

  it('as id prop value is "puik-avatar-id", id html attribute of puik-avatar should be "puik-avatar-id"', () => {
    factory({ id: 'puik-avatar-id' });
    expect(findAvatar().attributes().id).toBe('puik-avatar-id');
  });

  it('should display the avatar in reverse mode', () => {
    factory({ mode: 'reverse' });
    expect(findAvatar().classes()).toContain('puik-avatar--reverse');
  });

  it('should display the avatar in large size', () => {
    factory({ size: 'large' });
    expect(findAvatar().classes()).toContain('puik-avatar--large');
  });

  it('should display the initials "PA"', () => {
    factory({ firstName: 'Puik', lastName: 'Avatar' });
    expect(findInitialsWrapper().text()).toBe('PA');
  });

  it('icon type avatar should display the icon material "home"', () => {
    factory({ type: 'icon', icon: 'home' });
    expect(findIcon().text()).toBe('home');
  });

  it('photo type avatar should display an image with src attribute set to "src-img" and an attribute alt set to "alt-img"', () => {
    factory({ type: 'photo', src: 'src-img', alt: 'alt-img' });
    expect(findImg().attributes().src).toBe('src-img');
    expect(findImg().attributes().alt).toBe('alt-img');
  });

  it('should have data-test attribute on container div of avatar', () => {
    factory({
      type: 'initials',
      dataTest: 'example'
    });
    expect(findAvatar().attributes('data-test')).toBe('example');
  });

  it('should have data-test attribute on initials wrapper', () => {
    factory({
      type: 'initials',
      dataTest: 'example'
    });
    expect(findInitialsWrapper().attributes('data-test')).toBe(
      'initials-example'
    );
  });

  it('should have data-test attribute on icon', () => {
    factory({
      type: 'icon',
      icon: 'home',
      dataTest: 'example'
    });
    expect(findIcon().attributes('data-test')).toBe('icon-example');
  });

  it('should have data-test attribute on image', () => {
    factory({
      type: 'photo',
      src: 'src-example',
      alt: 'alt-example',
      dataTest: 'example'
    });
    expect(findImg().attributes('data-test')).toBe('image-example');
  });
});
