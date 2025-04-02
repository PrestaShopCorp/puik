import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikInput, InputProps } from '@prestashopcorp/puik-components';

describe('Input tests', () => {
  let wrapper: VueWrapper<any>;

  const findField = () => wrapper.find('.puik-input__field');
  const findInput = () => wrapper.find('.puik-input');
  const findWrapper = () => wrapper.find('.puik-input__wrapper');
  const findHint = () => wrapper.find('.puik-input__hint__text');
  const findError = () => wrapper.find('.puik-input__hint__error');
  const findErrorMessage = () => wrapper.find('.puik-input__hint__error__text');
  const findIncrement = () => wrapper.find('.puik-input__controls__increment');
  const findDecrement = () => wrapper.find('.puik-input__controls__decrement');
  const findRevealPassword = () => wrapper.find('.puik-input__reveal-password');
  const findPrepend = () => wrapper.find('.puik-input__prepend');
  const findAppend = () => wrapper.find('.puik-input__append');
  const findSrLabel = () => wrapper.find('.puik-sr-only');

  const factory = (
    props?: InputProps,
    options?: ComponentMountingOptions<typeof PuikInput>
  ) => {
    wrapper = mount(PuikInput, {
      props,
      ...options
    });
  };

  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });

  it('should render a text input by default', () => {
    factory();
    expect(findField().attributes('type')).toBe('text');
  });

  it('should emit a value', async () => {
    const text = 'This is a text';
    factory();
    await wrapper.setValue(text);
    expect(wrapper.emitted('update:modelValue')?.[0]).toStrictEqual([text]);
  });

  it('should be disabled', () => {
    factory({ disabled: true });
    expect(findField().attributes('disabled')).toBeDefined();
    expect(findWrapper().classes()).toContain('puik-input__wrapper--disabled');
  });

  it('should add a focus class when input is focused', async () => {
    factory();
    await findField().trigger('focus');
    expect(findWrapper().classes()).toContain('puik-input__wrapper--focus');
  });

  it('should render an hint', () => {
    const hint = 'This is an hint message';
    factory(
      {},
      {
        slots: {
          hint
        }
      }
    );
    expect(findHint().text()).toBe(hint);
  });

  it('should hide the hint when hideHint is true', async () => {
    const hint = 'This is an hint message';
    factory(
      {},
      {
        slots: {
          hint
        }
      }
    );
    expect(findHint().text()).toBe(hint);
    await wrapper.setProps({ hideHint: true });
    expect(findHint().isVisible()).toBeFalsy();
  });

  it('should be on success state', () => {
    factory({ success: true });
    expect(findWrapper().classes()).toContain('puik-input__wrapper--success');
  });

  it('should render an error', () => {
    const error = 'This is an error message';
    factory({ error });
    expect(findError().text()).toContain(error);
    expect(findWrapper().classes()).toContain('puik-input__wrapper--error');
  });

  it('should render an error and hide the hint', () => {
    const hint = 'This is an hint message';
    const error = 'This is an error message';
    factory(
      {},
      {
        slots: {
          hint,
          error
        }
      }
    );
    expect(findHint().exists()).toBeFalsy();
    expect(findError().text()).toContain(error);
  });

  it('should render a number input', () => {
    factory({ type: 'number' });
    expect(findField().attributes('type')).toBe('number');
  });

  it('should increment and decrement a number on click on the controls', async () => {
    factory({ modelValue: 0, type: 'number' });
    await findIncrement().trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[0]).toStrictEqual([1]);
    await findDecrement().trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[1]).toStrictEqual([-1]);
  });

  it('should have a min and max', async () => {
    factory({ modelValue: 1, type: 'number', max: 1, min: 0 });
    await findIncrement().trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[0]).toBeFalsy();
    await wrapper.setProps({ modelValue: 0 });
    await findDecrement().trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[0]).toBeFalsy();
  });

  it('should increment following a defined step', async () => {
    factory({ modelValue: 0, type: 'number', step: 2 });
    await findIncrement().trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[0]).toStrictEqual([2]);
    await findDecrement().trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[1]).toStrictEqual([-2]);
  });

  it('should increment following a defined step and precision', async () => {
    factory({ modelValue: 0, type: 'number', step: 0.01, precision: 2 });
    await findIncrement().trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[0]).toStrictEqual([0.01]);
    await findDecrement().trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[1]).toStrictEqual([-0.01]);
  });

  it('should reveal the password on click of the reveal icon', async () => {
    factory({ type: 'password' });
    await findRevealPassword().trigger('click');
    expect(findField().attributes('type')).toBe('text');
    await findRevealPassword().trigger('click');
    expect(findField().attributes('type')).toBe('password');
  });

  it('should prepend content', () => {
    factory(
      {},
      {
        slots: {
          prepend: '$'
        }
      }
    );
    expect(findPrepend().exists).toBeTruthy();
    expect(findPrepend().text()).toBe('$');
  });

  it('should append content', () => {
    factory(
      {},
      {
        slots: {
          append: '$'
        }
      }
    );
    expect(findAppend().exists).toBeTruthy();
    expect(findAppend().text()).toBe('$');
  });

  it('should have a data-test attribut for the container div, the input and the error message', () => {
    const error = 'This is an error message';
    factory(
      { modelValue: 'value', type: 'text', dataTest: 'test' },
      {
        slots: {
          error
        }
      }
    );
    expect(findInput().attributes('data-test')).toBe('test');
    expect(findField().attributes('data-test')).toBe('input-test');
    expect(findErrorMessage().attributes('data-test')).toBe('error-test');
  });

  it('should render a search input', () => {
    factory({ type: 'search' });
    expect(findField().attributes('type')).toBe('search');
  });

  it('should render an email input', () => {
    factory({ type: 'email' });
    expect(findField().attributes('type')).toBe('email');
  });

  it('should render a URL input', () => {
    factory({ type: 'url' });
    expect(findField().attributes('type')).toBe('url');
  });

  it('should render a phone input', () => {
    factory({ type: 'tel' });
    expect(findField().attributes('type')).toBe('tel');
  });

  it('should render a custom aria-label', () => {
    const ariaLabel = 'Custom Aria Label';
    factory({ ariaLabel });
    expect(findField().attributes('aria-label')).toBe(ariaLabel);
  });

  it('should render a custom aria-live', () => {
    const ariaLive = 'assertive';
    factory({ ariaLive });
    expect(findField().attributes('aria-live')).toBe(ariaLive);
  });

  it('should render a custom id attribute', () => {
    const id = 'custom-id';
    factory({ id });
    expect(findField().attributes('id')).toBe(id);
  });

  it('should render a custom name attribute', () => {
    const name = 'custom-name';
    factory({ name });
    expect(findField().attributes('name')).toBe(name);
  });

  it('should render a custom placeholder attribute', () => {
    const placeholder = 'custom-placeholder';
    factory({ placeholder });
    expect(findField().attributes('placeholder')).toBe(placeholder);
  });

  it('should render a custom required attribute', () => {
    factory({ required: true });
    expect(findField().attributes('required')).toBeDefined();
  });

  it('should render a custom autocomplete attribute', () => {
    const autocomplete = 'on';
    factory({ autocomplete });
    expect(findField().attributes('autocomplete')).toBe(autocomplete);
  });

  it('should render a screen reader label', () => {
    const srLabel = 'Screen Reader Label';
    factory({ srLabel, id: 'input-id' });
    expect(findSrLabel().text()).toBe(srLabel);
    expect(findSrLabel().attributes('for')).toBe('input-id');
  });

  it('should render a custom maxLength attribute', () => {
    const maxLength = 10;
    factory({ maxLength });
    expect(findField().attributes('maxlength')).toBe(maxLength.toString());
  });

  it('should render a custom minlength attribute', () => {
    const minLength = 10;
    factory({ minLength });
    expect(findField().attributes('minlength')).toBe(minLength.toString());
  });
});
