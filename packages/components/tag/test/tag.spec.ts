import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikTag } from '@prestashopcorp/puik-components';
import type { ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { ExtractComponentPropType } from '@prestashopcorp/puik-utils';

type PuikTagProps = ExtractComponentPropType<typeof PuikTag>;

describe('Tag tests', () => {
  let wrapper: VueWrapper<any>;
  const findTag = () => wrapper.find('.puik-tag');
  const findTagContent = () => wrapper.find('.puik-tag__content');
  const findLeftIcon = () => wrapper.find('.puik-tag__icon');

  const factory = (
    props: PuikTagProps = { id: 'puik-tag-example', content: 'content' },
    options?: ComponentMountingOptions<PuikTagProps>
  ) => {
    wrapper = mount(PuikTag, {
      props,
      ...options
    } as any);
  };

  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });

  it('as id prop value is "puik-tag-example", id html attribute of puik-tag should be "puik-tag-example"', () => {
    factory();
    expect(findTag().attributes().id).toBe('puik-tag-example');
  });

  it('Tag text should be "content"', () => {
    factory();
    expect(findTagContent().text()).toBe('content');
  });

  it('should display a blue version of the tag', () => {
    factory({ id: 'puik-tag-example', content: 'content', variant: 'blue' });
    expect(findTag().classes()).toContain('puik-tag--blue');
  });

  it('should display a tag small version', () => {
    factory({ id: 'puik-tag-example', content: 'content', size: 'small' });
    expect(findTag().classes()).toContain('puik-tag--small');
  });

  it('should display a tag version with left icon', () => {
    factory({ id: 'puik-tag-example', content: 'content', icon: 'home' });
    expect(findLeftIcon().text()).toBe('home');
  });

  it('should display a tag disabled version', () => {
    factory({ id: 'puik-tag-example', content: 'content', disabled: true });
    expect(findTag().classes()).toContain('puik-tag--disabled');
  });
});
