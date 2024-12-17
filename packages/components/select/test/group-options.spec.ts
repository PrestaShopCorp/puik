import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import {
  PuikGroupOptions,
  PuikOption
} from '@prestashopcorp/puik-components';

describe('PuikGroupOptions', () => {
  it('should be a Vue instance', () => {
    const wrapper = mount(PuikGroupOptions);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render with default props', () => {
    const wrapper = mount(PuikGroupOptions);
    expect(wrapper.attributes('style')).toContain('z-index: 100');
    expect(wrapper.attributes('tabindex')).toBe('-1');
  });

  it('should accept and use the zIndex prop', () => {
    const wrapper = mount(PuikGroupOptions, {
      props: {
        zIndex: 200
      }
    });
    expect(wrapper.attributes('style')).toContain('z-index: 200');
  });

  it('should accept and use the dataTest prop', () => {
    const dataTest = 'group-options';
    const wrapper = mount(PuikGroupOptions, {
      props: {
        dataTest
      }
    });
    expect(wrapper.attributes('data-test')).toBe(dataTest);
  });

  it('should render slot content with PuikOption', () => {
    const wrapper = mount(PuikGroupOptions, {
      slots: {
        default: `
        <puik-option label="Option 1" value="1" />`
      },
      global: {
        components: {
          PuikOption
        }
      }
    });
    expect(wrapper.findComponent(PuikOption).exists()).toBe(true);
    expect(wrapper.findComponent(PuikOption).props('label')).toBe('Option 1');
    expect(wrapper.findComponent(PuikOption).props('value')).toBe('1');
  });
});
