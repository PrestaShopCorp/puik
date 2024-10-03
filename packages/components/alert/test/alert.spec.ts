import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { faker } from '@faker-js/faker';
import { PuikAlert, AlertProps, PuikAlertVariants } from '@prestashopcorp/puik-components';

describe('Alert tests', () => {
  let wrapper: VueWrapper<any>;

  const findAlert = () => wrapper.find('.puik-alert');
  const findButton = () => wrapper.find('.puik-alert__button');
  const findTitle = () => wrapper.find('.puik-alert__title');
  const findDesc = () => wrapper.find('.puik-alert__description');
  const findCloseButton = () => wrapper.find('.puik-alert__close');
  const findLink = () => wrapper.find('.puik-alert__link');
  const findLeftButtonIcon = () => wrapper.find('.puik-alert__button .puik-button__left-icon');
  const findRightButtonIcon = () => wrapper.find('.puik-alert__button .puik-button__right-icon');
  const findLeftLinkIcon = () => wrapper.find('.puik-alert__link .puik-button__left-icon');
  const findRightLinkIcon = () => wrapper.find('.puik-alert__link .puik-button__right-icon');
  const findIcon = () => wrapper.find('.puik-alert__icon');

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

  it('should display a success alert by default', () => {
    factory();
    expect(findAlert().classes()).toContain('puik-alert--success');
  });

  it('should display a warning alert', () => {
    factory({ variant: PuikAlertVariants.Warning });
    expect(findAlert().classes()).toContain('puik-alert--warning');
  });

  it('should display a danger alert', () => {
    factory({ variant: PuikAlertVariants.Danger });
    expect(findAlert().classes()).toContain('puik-alert--danger');
  });

  it('should display an info alert', () => {
    factory({ variant: PuikAlertVariants.Info });
    expect(findAlert().classes()).toContain('puik-alert--info');
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

  it('should display a link which emits the clickLink event on click', async () => {
    factory({ linkLabel: 'Learn more' });
    expect(findLink().exists()).toBeTruthy();
    await findLink().trigger('click');
    expect(wrapper.emitted('clickLink')).toBeTruthy();
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

  it('should have a data-test attribute on container div, title, description button, close button, and link', () => {
    factory({
      title: faker.lorem.word(2),
      description: faker.lorem.sentence(60),
      buttonLabel: 'Button',
      linkLabel: 'Learn more',
      isClosable: true,
      dataTest: 'alert'
    });
    expect(findAlert().attributes('data-test')).toBe('alert');
    expect(findTitle().attributes('data-test')).toBe('title-alert');
    expect(findDesc().attributes('data-test')).toBe('description-alert');
    expect(findButton().attributes('data-test')).toBe('button-alert');
    expect(findCloseButton().attributes('data-test')).toBe('close-alert');
    expect(findLink().attributes('data-test')).toBe('link-alert');
  });

  it('should set the aria-labelledby and aria-describedby attributes correctly', () => {
    const ariaId = 'test-id';
    factory({
      title: 'Test Title',
      description: 'Test Description'
    }, {
      attrs: {
        'aria-labelledby': `title-${ariaId}`,
        'aria-describedby': `description-${ariaId}`
      }
    });

    expect(findAlert().attributes('aria-labelledby')).toBe(`title-${ariaId}`);
    expect(findAlert().attributes('aria-describedby')).toBe(`description-${ariaId}`);
  });

  it('should set the aria-live attribute correctly', () => {
    factory({
      ariaLive: 'assertive'
    });
    expect(findAlert().attributes('aria-live')).toBe('assertive');
  });

  it('should display the correct icon for each variant', () => {
    const variants = [PuikAlertVariants.Success, PuikAlertVariants.Warning, PuikAlertVariants.Danger, PuikAlertVariants.Info];
    variants.forEach(variant => {
      factory({ variant });
      expect(findIcon().exists()).toBeTruthy();
    });
  });

  it('should not render optional elements when props are not provided', () => {
    factory();
    expect(findButton().exists()).toBeFalsy();
    expect(findLink().exists()).toBeFalsy();
    expect(findCloseButton().exists()).toBeFalsy();
  });

  it('should set the internal link correctly', () => {
    factory({ linkLabel: 'Learn more', internalLink: '/internal' });
    expect(findLink().attributes('to')).toBe('/internal');
  });

  it('should set the external link correctly', () => {
    factory({ linkLabel: 'Learn more', externalLink: 'https://example.com' });
    expect(findLink().attributes('href')).toBe('https://example.com');
  });

  it('should set the aria-label for the button correctly', () => {
    factory({ buttonLabel: 'Button', ariaLabelBtn: 'Button aria label' });
    expect(findButton().attributes('aria-label')).toBe('Button aria label');
  });

  it('should set the aria-label for the link correctly', () => {
    factory({ linkLabel: 'Learn more', ariaLabelLink: 'Link aria label' });
    expect(findLink().attributes('aria-label')).toBe('Link aria label');
  });

  it('should display the left icon for the button', () => {
    factory({ buttonLabel: 'Button', leftIconBtn: 'favorite' });
    expect(findLeftButtonIcon().classes()).toContain('puik-button__left-icon');
  });

  it('should display the right icon for the button', () => {
    factory({ buttonLabel: 'Button', rightIconBtn: 'favorite' });
    expect(findRightButtonIcon().classes()).toContain('puik-button__right-icon');
  });

  it('should display the left icon for the link', () => {
    factory({ linkLabel: 'Learn more', leftIconLink: 'favorite' });
    expect(findLeftLinkIcon().classes()).toContain('puik-button__left-icon');
  });

  it('should display the right icon for the link', () => {
    factory({ linkLabel: 'Learn more', rightIconLink: 'favorite' });
    expect(findRightLinkIcon().classes()).toContain('puik-button__right-icon');
  });
});
