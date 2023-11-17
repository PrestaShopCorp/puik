import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PuikChip from '../src/chip.vue';
import type { MountingOptions, VueWrapper } from '@vue/test-utils';

describe('Chip tests', () => {
  let wrapper: VueWrapper<any>;
  const findChip = () => wrapper.find('.puik-chip');
  const findChipContent = () => wrapper.find('.puik-chip__content');
  const findLeftIcon = () => wrapper.find('.puik-chip__icon');

  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikChip, {
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

  it('as id prop value is "puik-chip-example", id html attribute of puik-chip should be "puik-chip-example"', () => {
    factory({ id: 'puik-chip-example' });
    expect(findChip().attributes().id).toBe('puik-chip-example');
  });

  it('Chip text should be "content"', () => {
    factory({ content: 'content' });
    expect(findChipContent().text()).toBe('content');
  });

  it('should display a chip small version', () => {
    factory({ size: 'small' });
    expect(findChip().classes()).toContain('puik-chip--small');
  });

  it('should display a chip version with left icon', () => {
    factory({ icon: 'home' });
    expect(findLeftIcon().text()).toBe('home');
  });

  it('should display a chip disabled version', () => {
    factory({ disabled: true });
    expect(findChip().classes()).toContain('puik-chip--disabled');
  });
});
