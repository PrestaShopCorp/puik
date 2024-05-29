import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikChip, ChipProps } from '@prestashopcorp/puik-components';

describe('Chip tests', () => {
  let wrapper: VueWrapper<any>;
  const findChip = () => wrapper.find('.puik-chip');
  const findChipContent = () => wrapper.find('.puik-chip__content p');
  const findLeftIcon = () => wrapper.find('.puik-chip__icon');

  const factory = (
    props: ChipProps,
    options?: ComponentMountingOptions<typeof PuikChip>
  ) => {
    wrapper = mount(PuikChip, {
      props,
      ...options
    });
  };

  it('as id prop value is "puik-chip-example", id html attribute of puik-chip should be "puik-chip-example"', () => {
    factory({ id: 'puik-chip-example', content: 'content' });
    expect(findChip().attributes().id).toBe('puik-chip-example');
  });

  it('Chip text should be "content"', () => {
    factory({ id: 'puik-chip-example', content: 'content' });
    expect(findChipContent().text()).toBe('content');
  });

  it('should display a chip small version', () => {
    factory({ id: 'puik-chip-example', content: 'content', size: 'small' });
    expect(findChip().classes()).toContain('puik-chip--small');
  });

  it('should display a chip version with left icon', () => {
    factory({ id: 'puik-chip-example', content: 'content', icon: 'home' });
    expect(findLeftIcon().text()).toBe('home');
  });

  it('should display a chip disabled version', () => {
    factory({ id: 'puik-chip-example', content: 'content', disabled: true });
    expect(findChip().classes()).toContain('puik-chip--disabled');
  });
});
