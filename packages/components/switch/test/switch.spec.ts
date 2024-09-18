import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikSwitch, SwitchProps } from '@prestashopcorp/puik-components';

describe('Switch tests', () => {
  let wrapper: VueWrapper<any>;
  const findLeftLabel = () => wrapper.find('.puik-switch__label--left');
  const findRightLabel = () => wrapper.find('.puik-switch__label--right');
  const findScreenReader = () => wrapper.find('.puik-sr-only');
  const findSwitch = () => wrapper.find('.puik-switch');
  const factory = (
    props?: SwitchProps,
    options?: ComponentMountingOptions<typeof PuikSwitch>
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

  it('should have a screen reader label', async () => {
    const srLabel = 'Switch';
    factory({ srLabel });
    expect(findScreenReader().text()).toBe(`Enable : ${srLabel}`);
    await wrapper.setProps({ modelValue: true });
    expect(findScreenReader().text()).toBe(`Disable : ${srLabel}`);
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

  it('should render with a default left label', () => {
    factory();
    expect(findLeftLabel().exists()).toBe(false);
  });

  it('should render with a default right label', () => {
    factory();
    expect(findRightLabel().exists()).toBe(false);
  });

  it('should toggle value when clicked', async () => {
    factory({ modelValue: false });
    await findSwitch().trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[0]).toStrictEqual([true]);
    await wrapper.setProps({ modelValue: true }); // Update the prop to reflect the emitted value
    await findSwitch().trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[1]).toStrictEqual([false]);
  });
});
