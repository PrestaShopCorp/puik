import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PuikTag from '../src/tag.vue';
import type { MountingOptions, VueWrapper } from '@vue/test-utils';

describe('Tag tests', () => {
  let wrapper: VueWrapper<any>;
  const findTag = () => wrapper.find('.puik-tag');
  const findTagContent = () => wrapper.find('.puik-tag__content');
  const findLeftIcon = () => wrapper.find('.puik-tag__icon');

  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikTag, {
      props: {
        ...propsData
      },
      ...options
    });
  };

  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });

  it('as id prop value is "puik-tag-example", id html attribute of puik-tag should be "puik-tag-example"', () => {
    factory({ id: 'puik-tag-example' });
    expect(findTag().attributes().id).toBe('puik-tag-example');
  });

  it('Tag text should be "content"', () => {
    factory({ content: 'content' });
    expect(findTagContent().text()).toBe('content');
  });

  it('should display a blue version of the tag', () => {
    factory({ variant: 'blue' });
    expect(findTag().classes()).toContain('puik-tag--blue');
  });

  it('should display a tag small version', () => {
    factory({ size: 'small' });
    expect(findTag().classes()).toContain('puik-tag--small');
  });

  it('should display a tag version with left icon', () => {
    factory({ icon: 'home' });
    expect(findLeftIcon().text()).toBe('home');
  });

  it('should display a tag disabled version', () => {
    factory({ disabled: true });
    expect(findTag().classes()).toContain('puik-tag--disabled');
  });
});
