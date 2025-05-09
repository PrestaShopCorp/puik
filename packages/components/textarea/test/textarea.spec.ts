import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikTextarea, TextareaProps } from '@prestashopcorp/puik-components';

describe('Textarea tests', () => {
  let wrapper: VueWrapper<any>;
  const factory = (
    props?: TextareaProps,
    options?: ComponentMountingOptions<typeof PuikTextarea>
  ) => {
    wrapper = mount(PuikTextarea, {
      props: {
        ...props,
        'onUpdate:modelValue': async (modelValue: any) => {
          await wrapper.setProps({ modelValue });
        }
      },
      ...options
    });
  };

  const findField = () => wrapper.find('.puik-textarea__field');
  const findWrapper = () => wrapper.find('.puik-textarea__wrapper');
  const findHint = () => wrapper.find('.puik-textarea__hint__text');
  const findError = () => wrapper.find('.puik-textarea__hint__error');
  const findCharacterCount = () =>
    wrapper.find('.puik-textarea__character-count');

  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
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
    expect(findWrapper().classes()).toContain(
      'puik-textarea__wrapper--disabled'
    );
  });

  it('should be readonly', () => {
    factory({ readonly: true });
    expect(findField().attributes('readonly')).toBeDefined();
    expect(findWrapper().classes()).toContain(
      'puik-textarea__wrapper--readonly'
    );
  });

  it('should add a focus class when textarea is focused', async () => {
    factory();
    await findField().trigger('focus');
    expect(findWrapper().classes()).toContain('puik-textarea__wrapper--focus');
  });

  it('should emit blur event', async () => {
    factory();
    await findField().trigger('blur');
    expect(wrapper.emitted('blur')).toBeTruthy();
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

  it('should render an error', () => {
    const error = 'This is an error message';
    factory({ error });
    expect(findError().text()).toContain(error);
    expect(findWrapper().classes()).toContain('puik-textarea__wrapper--error');
  });

  it('should render a character count', async () => {
    const text = 'Hello World!';
    const textTooLong = 'Hello World! but way too long';
    factory({ maxLength: 20 });
    expect(findCharacterCount().text()).toContain('0/20');
    await wrapper.setValue(text);
    expect(findCharacterCount().text()).toContain('12/20');
    expect(wrapper.classes()).not.toContain(
      'puik-textarea__character-count--error'
    );
    await wrapper.setValue(textTooLong);
    expect(findCharacterCount().text()).toContain('29/20');
    expect(wrapper.classes()).toContain('puik-textarea--count-error');
  });
});
