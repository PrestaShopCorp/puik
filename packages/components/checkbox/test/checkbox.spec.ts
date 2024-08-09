import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { PuikCheckbox, CheckboxProps } from '@prestashopcorp/puik-components';

describe('Checkbox tests', () => {
  let wrapper: VueWrapper<any>;
  const findCheckbox = () => wrapper.find('.puik-checkbox');
  const findInput = () => wrapper.find('.puik-checkbox__input');
  const findLabel = () => wrapper.find('.puik-checkbox__label');

  const factory = (
    props?: CheckboxProps,
    options?: ComponentMountingOptions<typeof PuikCheckbox>
  ) => {
    wrapper = mount(PuikCheckbox, {
      props,
      ...options
    });
  };

  it('should emit update:modelValue with true as payload when the input is clicked', async () => {
    factory({ modelValue: false });
    await findInput().setValue(true);
    expect(wrapper.emitted('update:modelValue')).toStrictEqual([[true]]);
  });

  it('should emit update:modelValue with true as payload when the label is clicked', async () => {
    factory({ label: 'Label', modelValue: false }, { attachTo: document.body });
    await findLabel().trigger('click');
    expect(wrapper.emitted('update:modelValue')).toStrictEqual([[true]]);
  });

  it('should not emit update:modelValue when the input is clicked AND the checkbox is disabled', async () => {
    factory({ disabled: true, modelValue: false });
    await findInput().setValue(true);
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });

  it('should not emit update:modelValue when the label is clicked AND the checkbox is disabled', async () => {
    factory({ label: 'Label', disabled: true, modelValue: false });
    await findLabel().trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });

  it('should not emit update:modelValue when the custom label is clicked AND the checkbox is disabled', async () => {
    factory(
      { disabled: true, modelValue: false },
      { slots: { default: 'Custom label' } }
    );
    await findLabel().trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });

  it('should display the label', () => {
    factory({ label: 'The label', modelValue: false });
    expect(findLabel().text()).toContain('The label');
  });

  it('should fill the custom label slot when no label is provided', () => {
    factory(
      { modelValue: false },
      {
        slots: { default: 'Custom label' }
      }
    );

    expect(findLabel().text()).toContain('Custom label');
  });

  it('should display the custom label slot even if a props label is provided', () => {
    factory(
      { label: 'Label', modelValue: false },
      {
        slots: { default: 'Custom label' }
      }
    );

    expect(findLabel().text()).toContain('Custom label');
  });

  it('should set the indeterminate checkbox at checked if the label is clicked AND the checkbox was checked before being indeterminate', async () => {
    factory({ label: 'Label', indeterminate: false, modelValue: true });
    vi.spyOn(wrapper.vm.checkboxInputRef, 'click');
    await wrapper.setProps({ indeterminate: true });
    await findLabel().trigger('click');
    expect(wrapper.vm.checkboxInputRef.click).toHaveBeenCalled();
  });

  it('should NOT set the indeterminate checkbox at checked if the label is clicked AND the checkbox was NOT checked before being indeterminate', async () => {
    factory({ label: 'Label', indeterminate: false, modelValue: false });
    vi.spyOn(wrapper.vm.checkboxInputRef, 'click');
    await wrapper.setProps({ indeterminate: true });
    await findLabel().trigger('click');
    expect(wrapper.vm.checkboxInputRef.click).not.toHaveBeenCalled();
  });

  it('should have a data-test attribute on the container div, the input and the label', () => {
    factory({ label: 'Label', modelValue: false, dataTest: 'test' });
    expect(findCheckbox().attributes('data-test')).toBe('test');
    expect(findInput().attributes('data-test')).toBe('input-test');
    expect(findLabel().attributes('data-test')).toBe('label-test');
  });

  it('should set aria-checked to "mixed" when indeterminate is true', () => {
    factory({ indeterminate: true, modelValue: false });
    expect(findInput().attributes('aria-checked')).toBe('mixed');
  });

  it('should set aria-checked to "true" when checked is true', () => {
    factory({ modelValue: true });
    expect(findInput().attributes('aria-checked')).toBe('true');
  });

  it('should set aria-checked to "false" when checked is false', () => {
    factory({ modelValue: false });
    expect(findInput().attributes('aria-checked')).toBe('false');
  });

  it('should set aria-disabled to "true" when disabled is true', () => {
    factory({ disabled: true, modelValue: false });
    expect(findInput().attributes('aria-disabled')).toBe('true');
  });

  it('should set aria-disabled to "false" when disabled is false', () => {
    factory({ disabled: false, modelValue: false });
    expect(findInput().attributes('aria-disabled')).toBe('false');
  });

  it('should set aria-label to the provided label', () => {
    factory({ label: 'Test Label', modelValue: false });
    expect(findInput().attributes('aria-label')).toBe('Test Label');
  });

  it('should set aria-label to the provided ariaLabel', () => {
    factory({ ariaLabel: 'Test Aria Label', modelValue: false });
    expect(findInput().attributes('aria-label')).toBe('Test Aria Label');
  });

  it('should set aria-label to the provided srLabel', () => {
    factory({ srLabel: 'Test SR Label', modelValue: false });
    expect(findInput().attributes('aria-label')).toBe('Test SR Label');
  });

  it('should set indeterminate state on the input element', async () => {
    factory({ indeterminate: false, modelValue: false });
    await wrapper.setProps({ indeterminate: true });
    expect((findInput().element as HTMLInputElement).indeterminate).toBe(true);
  });

  it('should remove indeterminate state on the input element', async () => {
    factory({ indeterminate: true, modelValue: false });
    await wrapper.setProps({ indeterminate: false });
    expect((findInput().element as HTMLInputElement).indeterminate).toBe(false);
  });
});
