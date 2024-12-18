import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import {
  PuikOption,
  PuikCheckbox,
  PuikIcon
} from '@prestashopcorp/puik-components';

describe('PuikOption', () => {
  it('should be a Vue instance', () => {
    const wrapper = mount(PuikOption, {
      props: { label: 'Option 1', value: '1' }
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('should render with default props', () => {
    const wrapper = mount(PuikOption, {
      props: { label: 'Option 1', value: '1' }
    });
    expect(wrapper.attributes('role')).toBe('option');
    expect(wrapper.attributes('tabindex')).toBe('-1');
  });

  it('should accept and use the label prop', () => {
    const wrapper = mount(PuikOption, {
      props: { label: 'Option 1' }
    });
    expect(wrapper.find('label').text()).toBe('Option 1');
  });

  it('should accept and use the value prop', () => {
    const wrapper = mount(PuikOption, {
      props: { label: 'Option 1', value: '1' }
    });
    expect(wrapper.props('value')).toBe('1');
  });

  it('should accept and use the disabled prop', () => {
    const wrapper = mount(PuikOption, {
      props: { label: 'Option 1', value: '1', disabled: true }
    });
    expect(wrapper.classes()).toContain('puik-option--disabled');
    expect(wrapper.attributes('aria-disabled')).toBe('true');
  });

  it('should accept and use the isSelected prop', async () => {
    const wrapper = mount(PuikOption, {
      props: { label: 'Option 1', value: '1', isSelected: true }
    });
    expect(wrapper.attributes('aria-selected')).toBe('true');
  });

  it('should accept and use the multiSelect prop', () => {
    const wrapper = mount(PuikOption, {
      props: { label: 'Option 1', value: '1', multiSelect: true },
      global: {
        components: {
          PuikCheckbox
        }
      }
    });
    expect(wrapper.findComponent(PuikCheckbox).exists()).toBe(true);
  });

  it('should accept and use the dataTest prop', () => {
    const dataTest = 'option-test';
    const wrapper = mount(PuikOption, {
      props: { label: 'Option 1', value: '1', dataTest }
    });
    expect(wrapper.attributes('data-test')).toBe(dataTest);
  });

  it('should emit select event on click', async () => {
    const wrapper = mount(PuikOption, {
      props: { label: 'Option 1', value: '1' }
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('select')).toBeTruthy();
    const selectEvent = wrapper.emitted('select');
    if (selectEvent) {
      expect(selectEvent[0]).toEqual([{ label: 'Option 1', value: '1' }]);
    }
  });

  it('should emit open event on select for single select mode', async () => {
    const wrapper = mount(PuikOption, {
      props: { label: 'Option 1', value: '1', isSelected: true }
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('open')).toBeTruthy();
    const openEvent = wrapper.emitted('open');
    if (openEvent) {
      expect(openEvent[0]).toEqual([false]);
    }
  });

  it('should render slot content', () => {
    const wrapper = mount(PuikOption, {
      props: { label: 'Option 1', value: '1' },
      slots: {
        default: '<div class="slot-content">Slot Content</div>'
      }
    });
    expect(wrapper.find('.slot-content').exists()).toBe(true);
    expect(wrapper.find('.slot-content').text()).toBe('Slot Content');
  });

  it('should render PuikCheckbox in multiSelect mode', () => {
    const wrapper = mount(PuikOption, {
      props: { label: 'Option 1', value: '1', multiSelect: true },
      global: {
        components: {
          PuikCheckbox
        }
      }
    });
    expect(wrapper.findComponent(PuikCheckbox).exists()).toBe(true);
  });

  it('should render PuikIcon when selected in single select mode', () => {
    const wrapper = mount(PuikOption, {
      props: { label: 'Option 1', value: '1', isSelected: true, multiSelect: false },
      global: {
        components: {
          PuikIcon
        }
      }
    });
    expect(wrapper.findComponent(PuikIcon).exists()).toBe(true);
    expect(wrapper.findComponent(PuikIcon).props('icon')).toBe('check');
  });
});
