import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikTag, TagProps } from '@prestashopcorp/puik-components';

describe('Tag tests', () => {
  let wrapper: VueWrapper<any>;
  const findTag = () => wrapper.find('.puik-tag');
  const findTagContent = () => wrapper.find('.puik-tag__content p');
  const findLeftIcon = () => wrapper.find('.puik-tag__icon');

  const factory = (
    props: TagProps = { id: 'puik-tag-example', content: 'content' },
    options?: ComponentMountingOptions<typeof PuikTag>
  ) => {
    wrapper = mount(PuikTag, {
      props,
      ...options
    });
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

  it('should display a tag with accent', () => {
    factory({ id: 'puik-tag-example', content: 'content', accent: true });
    expect(findTag().classes()).toContain('puik-tag--accent');
  });

  it('should display a tag large version', () => {
    factory({ id: 'puik-tag-example', content: 'content', size: 'large' });
    expect(findTag().classes()).toContain('puik-tag--large');
  });

  it('should display a tag version with left icon', () => {
    factory({ id: 'puik-tag-example', content: 'content', icon: 'home' });
    expect(findLeftIcon().text()).toBe('home');
  });

  it('should display a tag disabled version', () => {
    factory({ id: 'puik-tag-example', content: 'content', disabled: true });
    expect(findTag().classes()).toContain('puik-tag--disabled');
  });

  it('should have a data-test attribute for the container div and the content', () => {
    factory({
      id: 'puik-tag-example',
      content: 'long content for displaying the tooltip',
      dataTest: 'test'
    });
    expect(findTag().attributes('data-test')).toBe('test');
    expect(findTagContent().attributes('data-test')).toBe('content-test');
  });
});
