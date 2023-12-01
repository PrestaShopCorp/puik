import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { faker } from '@faker-js/faker';
import { PuikAlert, AlertProps } from '@prestashopcorp/puik-components';

describe('Alert tests', () => {
  let wrapper: VueWrapper<any>;

  const findAlert = () => wrapper.find('.puik-alert');
  const findButton = () => wrapper.find('.puik-alert__button');
  const findTitle = () => wrapper.find('.puik-alert__title');
  const findDesc = () => wrapper.find('.puik-alert__description');
  const findCloseButton = () => wrapper.find('.puik-alert__close');

  const factory = (
    props?: AlertProps,
    options?: ComponentMountingOptions<typeof PuikAlert>
  ) => {
    wrapper = mount(PuikAlert, {
      props,
      ...options
    });
  };

  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });

  it('should display an success alert by default', () => {
    factory();
    expect(findAlert().classes()).toContain('puik-alert--success');
  });

  it('should display a warning alert', () => {
    factory({ variant: 'warning' });
    expect(findAlert().classes()).toContain('puik-alert--warning');
  });

  it('should set the button label wrap to false', () => {
    factory({ buttonLabel: 'Button', buttonWrapLabel: false });
    expect(findButton().classes()).toContain('puik-button--no-wrap');
  });

  it('should display a button which emits the click event on click', async () => {
    factory({ buttonLabel: 'Button' });
    expect(findButton().exists()).toBeTruthy();
    await findButton().trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('should display a title and a description', async () => {
    factory({
      title: faker.lorem.word(2),
      description: faker.lorem.sentence(60)
    });
    expect(findTitle().exists()).toBeTruthy();
    expect(findDesc().exists()).toBeTruthy();
  });

  it('should display an alert without borders', () => {
    factory({
      title: faker.lorem.word(2),
      description: faker.lorem.sentence(60),
      disableBorders: true
    });
    expect(findAlert().classes()).toContain('puik-alert--no-borders');
  });

  it('should display a close icon and emit a close event on click', async () => {
    factory({
      title: faker.lorem.word(2),
      description: faker.lorem.sentence(60),
      isClosable: true
    });
    expect(findCloseButton()).toBeTruthy();
    await findCloseButton().trigger('click');
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('should have a data-test attribute on container div, title, description button and close button', () => {
    factory({
      title: faker.lorem.word(2),
      description: faker.lorem.sentence(60),
      buttonLabel: 'Button',
      isClosable: true,
      dataTest: 'alert'
    });
    expect(findAlert().attributes('data-test')).toBe('alert');
    expect(findTitle().attributes('data-test')).toBe('title-alert');
    expect(findDesc().attributes('data-test')).toBe('description-alert');
    expect(findButton().attributes('data-test')).toBe('button-alert');
    expect(findCloseButton().attributes('data-test')).toBe('close-alert');
  });
});
