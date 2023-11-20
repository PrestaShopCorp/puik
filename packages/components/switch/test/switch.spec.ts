import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikSwitch } from '@prestashopcorp/puik-components';
import type { ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { ExtractComponentPropType } from '@prestashopcorp/puik-utils';

type PuikSwitchProps = ExtractComponentPropType<typeof PuikSwitch>;

describe('Switch tests', () => {
  let wrapper: VueWrapper<any>;
  const findLeftLabel = () => wrapper.find('.puik-switch__label--left');
  const findRightLabel = () => wrapper.find('.puik-switch__label--right');
  const findScreenReader = () => wrapper.find('.puik-switch__screen-readers');
  const findSwitch = () => wrapper.find('.puik-switch');
  const factory = (
    props?: PuikSwitchProps,
    options?: ComponentMountingOptions<PuikSwitchProps>
  ) => {
    wrapper = mount(PuikSwitch, {
      props,
      ...options
    });
  };
  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });

  it('should have a label on the left of the Switch', () => {
    const label = 'Switch label';
    factory({ label });
    expect(findLeftLabel().text()).toBe(label);
  });

  it('should have a label on the right of the Switch', () => {
    const labelRight = 'Switch label';
    factory({ labelRight });
    expect(findRightLabel().text()).toBe(labelRight);
  });

  it('should have a screen reader text', async () => {
    const screenReaderText = 'Switch';
    factory({ screenReaderText });
    expect(findScreenReader().text()).toBe(`Enable ${screenReaderText}`);
    await wrapper.setProps({ modelValue: true });
    expect(findScreenReader().text()).toBe(`Disable ${screenReaderText}`);
  });

  it('should be disabled', () => {
    factory({ disabled: true });
    expect((findSwitch().element as HTMLButtonElement).disabled).toBeTruthy();
  });

  it('should be set as enabled', () => {
    factory({ modelValue: true });
    expect(findSwitch().classes()).toContain('puik-switch--enabled');
  });

  it('should emit an event on click', async () => {
    factory({ modelValue: false });
    await findSwitch().trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[0]).toStrictEqual([true]);
  });
});
