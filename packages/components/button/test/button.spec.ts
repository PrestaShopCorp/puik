import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { PuikButton, ButtonProps } from '@prestashopcorp/puik-components';

vi.mock('@prestashopcorp/puik-utils', () => ({
  generateId: () => 'mocked-id'
}));

describe('Button tests', () => {
  let wrapper: VueWrapper<any>;
  const findButton = () => wrapper.find('.puik-button');
  const findButtonLeftIcon = () => wrapper.find('.puik-button__left-icon');
  const findButtonRightIcon = () => wrapper.find('.puik-button__right-icon');
  const findLoader = () => wrapper.find('.puik-button__loader');
  const findLeftLoader = () => wrapper.find('.puik-button__loader--left');
  const findRightLoader = () => wrapper.find('.puik-button__loader--right');

  const disabledId = 'puik-button-disabled-mocked-id';

  const factory = (
    props?: ButtonProps,
    options?: ComponentMountingOptions<typeof PuikButton>
  ) => {
    wrapper = mount(PuikButton, {
      props,
      ...options
    });
  };

  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });

  it('should display the button on size lg', () => {
    factory({ size: 'lg' });
    expect(findButton().classes()).toContain('puik-button--lg');
  });

  it('should display the button variant as destructive', () => {
    factory({ variant: 'destructive' });
    expect(findButton().classes()).toContain('puik-button--destructive');
  });

  it('should display the button variant as secondary', () => {
    factory({ variant: 'secondary' });
    expect(findButton().classes()).toContain('puik-button--secondary');
  });

  it('should display the button variant as tertiary', () => {
    factory({ variant: 'tertiary' });
    expect(findButton().classes()).toContain('puik-button--tertiary');
  });

  it('should display the button variant as text', () => {
    factory({ variant: 'text' });
    expect(findButton().classes()).toContain('puik-button--text');
  });

  it('should display the button variant as info', () => {
    factory({ variant: 'info' });
    expect(findButton().classes()).toContain('puik-button--info');
  });

  it('should display the button variant as success', () => {
    factory({ variant: 'success' });
    expect(findButton().classes()).toContain('puik-button--success');
  });

  it('should display the button variant as warning', () => {
    factory({ variant: 'warning' });
    expect(findButton().classes()).toContain('puik-button--warning');
  });

  it('should display the button variant as danger', () => {
    factory({ variant: 'danger' });
    expect(findButton().classes()).toContain('puik-button--danger');
  });

  it('should display a left icon', () => {
    factory({ leftIcon: 'close' });
    expect(findButtonLeftIcon().exists()).toBeTruthy();
  });

  it('should display a right icon', () => {
    factory({ rightIcon: 'close' });
    expect(findButtonRightIcon().exists()).toBeTruthy();
  });

  it('should display the button on disabled mode', () => {
    factory({ disabled: true });
    expect((findButton().element as HTMLButtonElement).disabled).toBeTruthy();
  });

  it('should set the button on fluid mode', () => {
    factory({ fluid: true });
    expect(findButton().classes()).toContain('puik-button--fluid');
  });

  it('should set the button label wrap to false', () => {
    factory({ wrapLabel: false });
    expect(findButton().classes()).toContain('puik-button--no-wrap');
  });

  it('should be a router-link if to prop is defined', () => {
    factory({ to: '/test' });
    expect(findButton().element.tagName).toBe('ROUTER-LINK');
  });

  it('should be a link if href prop is defined', () => {
    factory({ href: '/test' });
    expect(findButton().element.tagName).toBe('A');
  });

  it('should have a data-test attribute on global component, left-icon and right-icon', () => {
    factory({
      leftIcon: 'close',
      rightIcon: 'close',
      dataTest: 'button'
    });
    expect(findButton().attributes('data-test')).toBe('button');
    expect(findButtonLeftIcon().attributes('data-test')).toBe('leftIcon-button');
    expect(findButtonRightIcon().attributes('data-test')).toBe(
      'rightIcon-button'
    );
  });

  it('should have the correct aria-label attribute', () => {
    factory({ ariaLabel: 'test-button' });
    expect(findButton().attributes('aria-label')).toBe('test-button');
  });

  it('should display the correct disabled reason', () => {
    factory({ disabled: true, disabledReason: 'Button is disabled' });
    const disabledReasonElement = wrapper.find(`#${disabledId}`);
    expect(disabledReasonElement.text()).toBe('Button is disabled.');
  });

  it('should have aria-describedby attribute when disabled', () => {
    factory({ disabled: true });
    expect(findButton().attributes('aria-describedby')).toBe(disabledId);
  });

  it('should have role attribute set to button', () => {
    factory();
    expect(findButton().attributes('role')).toBe('button');
  });

  it('should display loader when loading is true', () => {
    factory({ loading: true });
    expect(findLoader().exists()).toBeTruthy();
  });

  it('should display loader on the left when loaderPosition is left', () => {
    factory({ loading: true, loaderPosition: 'left' });
    expect(findLoader().exists()).toBeTruthy();
    expect(findLoader().classes()).toContain('puik-button__loader--left');
  });

  it('should display loader on the right when loaderPosition is right', () => {
    factory({ loading: true, loaderPosition: 'right' });
    expect(findLoader().exists()).toBeTruthy();
    expect(findLoader().classes()).toContain('puik-button__loader--right');
  });

  it('should have a data-test attribute on left-loader and right-loader', () => {
    factory({
      loading: true,
      loaderPosition: 'left',
      dataTest: 'button'
    });
    expect(findLeftLoader().attributes('data-test')).toBe('leftLoader-button');

    factory({
      loading: true,
      loaderPosition: 'right',
      dataTest: 'button'
    });
    expect(findRightLoader().attributes('data-test')).toBe('rightLoader-button');
  });
});
