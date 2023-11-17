import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { faker } from '@faker-js/faker';
import PuikSnackbar from '../src/snackbar.vue';
import type { PuikSnackbarOptions } from '../src/snackbar';
import type { MountingOptions, VueWrapper } from '@vue/test-utils';
describe('Snackbar tests', () => {
  let wrapper: VueWrapper<any>;

  const findText = () => wrapper.find('.puik-snackbar__text');
  const findAction = () => wrapper.find('.puik-snackbar__action');
  const findSnackbar = () => wrapper.find('.puik-snackbar');
  const findCloseButton = () => wrapper.find('.puik-snackbar__close-button');

  const factory = (
    propsData: PuikSnackbarOptions,
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikSnackbar, {
      props: {
        ...propsData
      },
      attachTo: document.body,
      ...options
    });
  };

  it('should be a vue instance', () => {
    const text = faker.lorem.sentence();
    factory({ text });
    expect(wrapper).toBeTruthy();
  });

  it('should be a default snackbar without action', () => {
    const text = faker.lorem.sentence();
    factory({ text });
    expect(findText().text()).toEqual(text);
    expect(findSnackbar().classes()).toContain('puik-snackbar--default');
    expect(findAction().exists()).toBeFalsy();
  });

  it('should be a snackbar without close button', () => {
    const text = faker.lorem.sentence();
    factory({ text, hasCloseButton: false });
    expect(findCloseButton().exists()).toBeFalsy();
  });

  it('should be a default snackbar with action', async () => {
    const text = faker.lorem.sentence();
    const label = faker.lorem.word();
    const callback = vi.fn();
    factory({
      text,
      action: {
        label,
        callback
      }
    });
    expect(findText().text()).toEqual(text);
    expect(findAction().exists()).toBeTruthy();
    expect(findSnackbar().classes()).toContain('puik-snackbar--default');
    expect(findAction().text()).toEqual(label);
    await findAction().trigger('click');
    expect(callback).toBeCalled();
  });

  it('should be a dangerous snackbar without action', () => {
    const text = faker.lorem.sentence();
    factory({ text, variant: 'danger' });
    expect(findText().text()).toEqual(text);
    expect(findSnackbar().classes()).toContain('puik-snackbar--danger');
    expect(findAction().exists()).toBeFalsy();
  });

  it('should be a success snackbar without action', () => {
    const text = faker.lorem.sentence();
    factory({ text, variant: 'success' });
    expect(findText().text()).toEqual(text);
    expect(findSnackbar().classes()).toContain('puik-snackbar--success');
    expect(findAction().exists()).toBeFalsy();
  });

  it('should be a dangerous snackbar with action', async () => {
    const text = faker.lorem.sentence();
    const label = faker.lorem.word();
    const callback = vi.fn();
    factory({
      text,
      action: {
        label,
        callback
      },
      variant: 'danger'
    });
    expect(findAction().exists()).toBeTruthy();
    expect(findText().text()).toEqual(text);
    expect(findSnackbar().classes()).toContain('puik-snackbar--danger');
    expect(findAction().text()).toEqual(label);
    await findAction().trigger('click');
    expect(callback).toBeCalled();
  });

  it('should be a success snackbar with action', async () => {
    const text = faker.lorem.sentence();
    const label = faker.lorem.word();
    const callback = vi.fn();
    factory({
      text,
      action: {
        label,
        callback
      },
      variant: 'success'
    });
    expect(findAction().exists()).toBeTruthy();
    expect(findText().text()).toEqual(text);
    expect(findSnackbar().classes()).toContain('puik-snackbar--success');
    expect(findAction().text()).toEqual(label);
    await findAction().trigger('click');
    expect(callback).toBeCalled();
  });

  it('should close the snackbar when clicking on the close button', async () => {
    const text = faker.lorem.sentence();
    await factory({ text });
    expect(findSnackbar().isVisible()).toBeTruthy();
    await findCloseButton().trigger('click');
    expect(findSnackbar().isVisible()).toBeFalsy();
  });

  it('should dismiss the snackbar after 3 seconds', async () => {
    vi.useFakeTimers();
    const text = faker.lorem.sentence();
    await factory({ text, duration: 3000 });
    expect(findSnackbar().isVisible()).toBeTruthy();
    await vi.advanceTimersByTime(3000);
    expect(findSnackbar().isVisible()).toBeFalsy();
    await vi.clearAllTimers();
  });

  it('should reset the snack bar timer on mouse hover', async () => {
    vi.useFakeTimers();
    const text = faker.lorem.sentence();

    await factory({ text, duration: 3000 });
    expect(findSnackbar().isVisible()).toBeTruthy();

    await vi.advanceTimersByTime(2000);
    await findSnackbar().trigger('mouseenter');
    await findSnackbar().trigger('mouseleave');

    await vi.advanceTimersByTime(1000);
    expect(findSnackbar().isVisible()).toBeTruthy();

    await vi.advanceTimersByTime(2000);
    expect(findSnackbar().isVisible()).toBeFalsy();

    await vi.clearAllTimers();
  });
});
