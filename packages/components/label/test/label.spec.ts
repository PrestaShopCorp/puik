import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { faker } from '@faker-js/faker';
import { PuikLabel, LabelProps } from '@prestashopcorp/puik-components';

describe('Label tests', () => {
  let wrapper: VueWrapper<any>;

  const findLabel = () => wrapper.find('.puik-label');
  const findLabelOptional = () => wrapper.find('.puik-label--optional');
  const findLabelRequired = () => wrapper.find('.puik-label--required');
  const findLabelReadonly = () => wrapper.find('.puik-label--readonly');

  const factory = (
    props: LabelProps,
    options?: ComponentMountingOptions<typeof PuikLabel>
  ) => {
    wrapper = mount(PuikLabel, {
      props,
      ...options
    } as any);
  };
  it('should be a vue instance', () => {
    factory({ for: '' });
    expect(wrapper).toBeTruthy();
  });

  it('should set the label', () => {
    const label = faker.lorem.words(2);
    factory(
      { for: '' },
      {
        slots: {
          default: label
        }
      }
    );
    expect(findLabel().text()).toBe(label);
  });

  it('should set the label in optional mode', () => {
    factory(
      { for: '', optional: true },
      {
        slots: {
          default: faker.lorem.words(2)
        }
      }
    );
    expect(findLabelOptional().exists()).toBeTruthy();
  });

  it('should set the label in required mode', () => {
    factory(
      { for: '', required: true },
      {
        slots: {
          default: faker.lorem.words(2)
        }
      }
    );
    expect(findLabelRequired().exists()).toBeTruthy();
  });

  it('should set the label in readonly mode', () => {
    factory(
      { for: '', readonly: true },
      {
        slots: {
          default: faker.lorem.words(2)
        }
      }
    );
    expect(findLabelReadonly().exists()).toBeTruthy();
  });

  it('should have a data-test attribute', () => {
    factory({ for: '', dataTest: 'test' });
    expect(findLabel().attributes('data-test')).toBe('test');
  });
});
