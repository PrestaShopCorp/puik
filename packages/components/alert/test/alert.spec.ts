import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { faker } from '@faker-js/faker';
import { PuikAlert } from '@prestashopcorp/puik-components';
import type { ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { ExtractComponentPropType } from '@prestashopcorp/puik-utils';

type PuikAlertProps = ExtractComponentPropType<typeof PuikAlert>;

describe('Alert tests', () => {
  let wrapper: VueWrapper<any>;

  const findAlert = () => wrapper.find('.puik-alert');
  const findButton = () => wrapper.find('.puik-alert__button');
  const findTitle = () => wrapper.find('.puik-alert__title');
  const findDesc = () => wrapper.find('.puik-alert__description');

  const factory = (
    props?: PuikAlertProps,
    options?: ComponentMountingOptions<PuikAlertProps>
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
});
