import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { faker } from '@faker-js/faker';
import { PuikRadio, RadioProps } from '@prestashopcorp/puik-components';

describe('Radio tests', () => {
  let wrapper: VueWrapper<any>;
  const findInputContainer = () => wrapper.find('.puik-radio');
  const findInput = () => wrapper.find('.puik-radio__input');
  const findLabel = () => wrapper.find('.puik-radio__label');

  const fakeValue = faker.word.adjective();
  const factory = (
    props: RadioProps,
    options?: ComponentMountingOptions<typeof PuikRadio>
  ) => {
    wrapper = mount(PuikRadio, {
      props,
      ...options
    });
  };
  it('should emit update:modelValue with the right value as payload when the input is clicked', async () => {
    factory({ modelValue: false, value: fakeValue });
    await findInput().setValue(true);
    expect(wrapper.emitted('update:modelValue')).toStrictEqual([[fakeValue]]);
  });

  it('should emit update:modelValue with the right value as payload when the label is clicked', async () => {
    factory(
      { label: 'Label', modelValue: false, value: fakeValue },
      { attachTo: document.body }
    );
    await findInput().setValue(true);
    expect(wrapper.emitted('update:modelValue')).toStrictEqual([[fakeValue]]);
  });
  it('should not emit update:modelValue when the input is clicked AND the radio is disabled', async () => {
    factory({ disabled: true, modelValue: false, value: fakeValue });
    await findInput().setValue(true);
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });
  it('should not emit update:modelValue when the label is clicked AND the radio is disabled', async () => {
    factory({ label: 'Label', disabled: true, modelValue: false, value: fakeValue });
    await findLabel().trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });
  it('should not emit update:modelValue when the custom label is clicked AND the radio is disabled', async () => {
    factory(
      { disabled: true, modelValue: false, value: fakeValue },
      { slots: { default: 'Custom label' } }
    );
    await findLabel().trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });
  it('should display the label', () => {
    factory({ label: 'The label', modelValue: false, value: fakeValue });
    expect(findLabel().text()).toContain('The label');
  });
  it('should not render the label if there is no label prop or slot', () => {
    factory({ label: undefined, modelValue: false, value: fakeValue });
    expect(findLabel().exists()).toBeFalsy();
  });
  it('should fill the custom label slot when no label is provided', () => {
    factory(
      { modelValue: false, value: fakeValue },
      {
        slots: { default: 'Custom label' }
      }
    );
    expect(findLabel().text()).toContain('Custom label');
  });
  it('should display the custom label slot even if a props label is provided', () => {
    factory(
      { label: 'Label', modelValue: false, value: fakeValue },
      {
        slots: { default: 'Custom label' }
      }
    );
    expect(findLabel().text()).toContain('Custom label');
  });

  it('should have a data-test attribute on container div, label and input', () => {
    factory({ label: 'Label', modelValue: false, value: fakeValue, dataTest: 'test' });
    const container = findInputContainer();
    const label = findLabel();
    const input = findInput();
    expect(container.attributes('data-test')).toBe('test');
    expect(label.attributes('data-test')).toBe('label-test');
    expect(input.attributes('data-test')).toBe('input-test');
  });
});
