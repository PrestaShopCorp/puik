import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { PuikIcon, IconProps } from '@prestashopcorp/puik-components';

describe('Icon tests', () => {
  let wrapper: VueWrapper<any>;
  const findIcon = () => wrapper.find<HTMLElement>('.puik-icon');

  const factory = (
    props: IconProps,
    options?: ComponentMountingOptions<typeof PuikIcon>
  ) => {
    wrapper = mount(PuikIcon, {
      props,
      ...options
    } as any);
  };
  it('should be a vue instance', () => {
    factory({
      icon: 'check'
    });
    expect(wrapper).toBeTruthy();
  });

  it('should set the icon', async () => {
    factory({
      icon: 'check',
      color: 'red'
    });
    expect(findIcon().text()).toBe('check');
  });

  it('should set the color', async () => {
    factory({
      icon: 'check',
      color: 'red'
    });

    expect(findIcon().element.style.color).toBe('red');
  });

  it('should set the font size when value is not number', async () => {
    factory({
      icon: 'check',
      fontSize: '56px'
    });

    expect(findIcon().element.style.fontSize).toBe('56px');
  });

  it('should set the font size when value is number', async () => {
    factory({
      icon: 'check',
      fontSize: 26
    });

    expect(findIcon().element.style.fontSize).toBe('26px');
  });

  it('should set the node type into HTML DOM', async () => {
    factory({
      icon: 'check',
      nodeType: 'span'
    });

    expect(findIcon().element.nodeName).toBe('SPAN');
  });

  it('should have a data-test attribute', () => {
    factory({ icon: 'check', dataTest: 'test' });
    expect(findIcon().attributes('data-test')).toBe('test');
  });
});
