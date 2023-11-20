import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { PuikIcon } from '@prestashopcorp/puik-components';
import type { ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { ExtractComponentPropType } from '@prestashopcorp/puik-utils';

type PuikIconProps = ExtractComponentPropType<typeof PuikIcon>;

describe('Icon tests', () => {
  let wrapper: VueWrapper<any>;
  const findIcon = () => wrapper.find<HTMLElement>('.puik-icon');

  const factory = (
    props: PuikIconProps,
    options?: ComponentMountingOptions<PuikIconProps>
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
});
