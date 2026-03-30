import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import {
  PuikSelect,
  PuikOption,
  SelectProps
} from '@prestashopcorp/puik-components';
import { nextTick, ref } from 'vue';

describe('Select tests', () => {
  let wrapper: VueWrapper<any>;

  const selectedOptions = ref();

  const factory = (
    props: SelectProps,
    options: ComponentMountingOptions<typeof PuikSelect> = {}
  ) => {
    wrapper = mount(PuikSelect, {
      props,
      ...options
    });
  };

  it('should be a vue instance', () => {
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('should accept and use the id prop', () => {
    const id = 'test-id';
    factory({
      id,
      modelValue: selectedOptions
    });
    expect(wrapper.find(`#${id}`).exists()).toBe(true);
  });

  it('should accept and use the modelValue prop', async () => {
    const value = ref('test-value');
    factory({
      id: 'test-select-id',
      modelValue: value
    });
    expect(wrapper.props('modelValue')).toBe(value);
  });

  it('should accept and use the name prop', () => {
    const name = 'test-name';
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      name
    });
    expect(wrapper.find(`input[name="${name}"]`).exists()).toBe(true);
  });

  it('should accept and use the label prop', () => {
    const label = 'Test Label';
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      label
    });
    expect(wrapper.find('.puik-label').text()).toContain(label);
  });

  it('should accept and use the required prop', () => {
    const label = 'Test Label';
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      label,
      required: true
    });
    expect(wrapper.find('.puik-label--required').exists()).toBe(true);
  });

  it('should accept and use the optional prop', () => {
    const label = 'Test Label';
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      label,
      optional: true
    });
    expect(wrapper.find('.puik-label--optional').exists()).toBe(true);
  });

  it('should accept and use the options prop', () => {
    const options = [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options
    });
    expect(wrapper.findAll('.puik-option').length).toBe(options.length);
  });

  it('should accept and use the optionLabelKey prop', () => {
    const options = [{ name: 'Option 1', id: '1' }, { name: 'Option 2', id: '2' }];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options,
      optionLabelKey: 'name'
    });
    expect(wrapper.find('.puik-option').text()).toBe('Option 1');
  });

  it('should accept and use the optionValueKey prop', async () => {
    const options = [{ label: 'Option 1', identifier: '1' }, { label: 'Option 2', identifier: '2' }];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options,
      optionValueKey: 'identifier'
    });
    await wrapper.findComponent(PuikOption).trigger('click');
    expect(selectedOptions.value).toEqual({ label: 'Option 1', identifier: '1' });
  });

  it('should accept and use the searchable prop', () => {
    const options = [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options,
      searchable: true
    });
    expect(wrapper.find('input[role="searchbox"]').exists()).toBe(true);
  });

  it('should call the custom filter method when filtering the options', async () => {
    const options = [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }];
    const customFilterMethod = vi.fn();
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options,
      searchable: true,
      customFilterMethod
    });
    await wrapper.find('input[role="searchbox"]').setValue('Option 1');
    expect(customFilterMethod).toHaveBeenCalled();
  });

  it('should accept and use the placeholder prop', () => {
    const placeholder = 'Select an option';
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      placeholder
    });
    expect(wrapper.find('input').attributes('placeholder')).toBe(placeholder);
  });

  it('should display the no match text when no options match the search query', async () => {
    const options = [{ label: 'Option 1', value: '1' }];
    const noMatchText = 'No results found';
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options,
      searchable: true,
      noMatchText
    });
    await wrapper.find('input[role="searchbox"]').setValue('Non-existent option');
    expect(wrapper.find('.puik-select__no-results').text()).toBe(noMatchText);
  });

  it('should accept and use the disabled prop', () => {
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      disabled: true
    });
    expect(wrapper.find('input').attributes('disabled')).toBeDefined();
  });

  it('should accept and use the error prop', () => {
    const error = 'This is an error message';
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      error
    });
    expect(wrapper.find('.puik-select__error__text').text()).toBe(error);
  });

  it('should accept and use the autocomplete prop', () => {
    const autocomplete = 'off';
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      autocomplete
    });
    expect(wrapper.find('input').attributes('autocomplete')).toBe(autocomplete);
  });

  it('should accept and use the prependInputIcon prop', () => {
    const prependInputIcon = 'search';
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      prependInputIcon
    });
    expect(wrapper.findComponent({ name: 'PuikIcon' }).exists()).toBe(true);
  });

  it('should accept and use the open prop', async () => {
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      open: true
    });
    await nextTick();
    expect(wrapper.find('.puik-select-dropdown').isVisible()).toBe(true);
  });

  it('should accept and use the dataTest prop', () => {
    const dataTest = 'test-select';
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      dataTest
    });
    expect(wrapper.find(`[data-test="select-${dataTest}"]`).exists()).toBe(true);
  });

  it('should close the options when closeOptions is called', async () => {
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      open: true
    });
    await nextTick();
    wrapper.vm.closeOptions();
    await nextTick();
    expect(wrapper.find('.puik-select-dropdown').isVisible()).toBe(false);
  });

  it('should select an option when selectOption is called', async () => {
    const options = [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options
    });
    await nextTick();
    wrapper.vm.selectOption(options[0]);
    await nextTick();
    expect(selectedOptions.value).toEqual(options[0]);
  });

  it('should emit update:modelValue event when an option is selected', async () => {
    const options = [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options
    });
    await wrapper.findComponent(PuikOption).trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0][0]).toEqual(options[0]);
  });

  it('should emit open event when options are opened via toggleOptions', async () => {
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions
    });
    await wrapper.find('.puik-single-select__input').trigger('click');
    expect(wrapper.emitted('open')).toBeTruthy();
  });

  it('should filter options based on search query', async () => {
    const options = [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options,
      searchable: true
    });
    await wrapper.find('input[role="searchbox"]').setValue('Option 1');
    await nextTick();
    expect(wrapper.findAll('.puik-option').length).toBe(1);
    expect(wrapper.find('.puik-option').text()).toBe('Option 1');
  });

  it('should not match options when search query characters are present but not consecutive', async () => {
    const options = [{ label: 'Option 3', value: '3' }, { label: 'Option 4', value: '4' }];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options,
      searchable: true
    });
    await wrapper.find('input[role="searchbox"]').setValue('ooooonnnnppp3');
    await nextTick();
    expect(wrapper.findAll('.puik-option').length).toBe(0);
  });

  it('should not select disabled options', async () => {
    const selectedOptions = ref();
    const options = [{ label: 'Optiorgrgrn 1', value: '1', disabled: true }, { label: 'Option 2', value: '2' }];
    factory({
      id: 'test-option-disabled-id',
      modelValue: selectedOptions,
      options
    });
    await wrapper.find('.puik-option--disabled').trigger('click');
    expect(selectedOptions.value).toBeUndefined();
  });

  it('should update selected options correctly when selectOption is called for multiple options', () => {
    const options = [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options,
      multiSelect: true
    });
    const option1 = options[0];
    const option2 = options[1];
    wrapper.vm.selectOption(option1);
    expect(wrapper.vm.selectedMultipleOptions).toEqual([option1]);
    wrapper.vm.selectOption(option2);
    expect(wrapper.vm.selectedMultipleOptions).toEqual([option1, option2]);
  });

  it('should emit update:modelValue event when multiple options are selected', async () => {
    const options = [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options,
      multiSelect: true
    });
    await wrapper.findAllComponents(PuikOption).at(0)?.trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0][0]).toEqual([options[0]]);
    await wrapper.findAllComponents(PuikOption).at(1)?.trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[1][0]).toEqual([options[0], options[1]]);
  });

  it('should emit search event with the search query', async () => {
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }],
      searchable: true
    });
    await wrapper.find('input[role="searchbox"]').setValue('Option 1');
    expect(wrapper.emitted('search')).toBeTruthy();
    expect(wrapper.emitted('search')?.[0][0]).toBe('Option 1');
  });

  it('should correctly update the select all indeterminate state', () => {
    const options = [{ label: 'Option 1', value: '1', disabled: false }, { label: 'Option 2', value: '2', disabled: false }];
    const selectedOptionsState = [options[0]];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptionsState,
      options,
      multiSelect: true
    });
    wrapper.vm.updateSelectAllIndeterminate(selectedOptionsState);
    expect(wrapper.vm.selectAllIndeterminate).toBe(true);
    expect(wrapper.vm.IsAllSelectedRef).toBe(false);
  });

  it('should select all options when toggleSelectAll is called', () => {
    const options = [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }];
    factory({
      id: 'test-select-id',
      modelValue: [],
      options,
      multiSelect: true
    });
    wrapper.vm.toggleSelectAll();
    expect(wrapper.vm.selectedMultipleOptions).toEqual(options);
  });

  it('should handle dropdown positioning correctly', async () => {
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]
    });
    await wrapper.vm.handleDropdownPosition();
  });

  it('should reset search query correctly', async () => {
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      searchable: true
    });
    wrapper.vm.searchQuery = 'some query';
    wrapper.vm.resetSearchQuery();
    expect(wrapper.vm.searchQuery).toBe('');
    expect(wrapper.emitted('search')).toBeTruthy();
    expect(wrapper.emitted('search')?.[0][0]).toBe('');
  });

  it('should close options correctly', async () => {
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      open: true
    });
    wrapper.vm.closeOptions();
    await nextTick();
    expect(wrapper.vm.openRef).toBe(false);
    expect(wrapper.emitted('open')).toBeTruthy();
    expect(wrapper.emitted('open')?.[0][0]).toBe(false);
  });

  it('should deselect an option correctly', () => {
    const options = [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options,
      multiSelect: true
    });
    const option = options[0];
    wrapper.vm.selectedMultipleOptions.value = [option];
    wrapper.vm.deselectOption(option);
    expect(wrapper.vm.selectedMultipleOptions).toEqual([]);
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0][0]).toEqual([]);
  });

  it('should render option description when provided', () => {
    const options = [
      { label: 'Option 1', value: '1', description: 'Description for option 1' },
      { label: 'Option 2', value: '2', description: 'Description for option 2' }
    ];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options
    });
    expect(wrapper.find('.puik-option__description').text()).toBe('Description for option 1');
  });

  it('should render option tag when provided', () => {
    const options = [
      { label: 'Option 1', value: '1', tag: 'Recommended' },
      { label: 'Option 2', value: '2' }
    ];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options
    });
    expect(wrapper.find('.puik-option__tag').text()).toBe('Recommended');
  });

  it('should apply rich option class when description is provided', () => {
    const options = [
      { label: 'Option 1', value: '1', description: 'A description' }
    ];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options
    });
    expect(wrapper.find('.puik-option--rich').exists()).toBe(true);
  });

  it('should not apply rich option class when no description', () => {
    const options = [
      { label: 'Option 1', value: '1' }
    ];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options
    });
    expect(wrapper.find('.puik-option--rich').exists()).toBe(false);
  });

  it('should use custom optionDescriptionKey', () => {
    const options = [
      { label: 'Option 1', value: '1', info: 'Custom description' }
    ];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options,
      optionDescriptionKey: 'info'
    });
    expect(wrapper.find('.puik-option__description').text()).toBe('Custom description');
  });

  it('should use custom optionTagKey', () => {
    const options = [
      { label: 'Option 1', value: '1', badge: 'Custom tag' }
    ];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options,
      optionTagKey: 'badge'
    });
    expect(wrapper.find('.puik-option__tag').text()).toBe('Custom tag');
  });

  it('should include description and tag in aria-label for accessibility', () => {
    const options = [
      { label: 'OAuth 2.0', value: 'oauth', tag: 'Recommended', description: 'Secure authentication' }
    ];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options
    });
    const option = wrapper.find('.puik-option');
    expect(option.attributes('aria-label')).toBe('OAuth 2.0, Recommended, Secure authentication');
  });

  it('should render rich items with description and tag together', () => {
    const options = [
      { label: 'Option 1', value: '1', tag: 'Tag 1', description: 'Desc 1' },
      { label: 'Option 2', value: '2', tag: 'Tag 2', description: 'Desc 2' }
    ];
    factory({
      id: 'test-select-id',
      modelValue: selectedOptions,
      options
    });
    expect(wrapper.findAll('.puik-option--rich').length).toBe(2);
    expect(wrapper.findAll('.puik-option__tag').length).toBe(2);
    expect(wrapper.findAll('.puik-option__description').length).toBe(2);
  });

  it('should display the tag in the selected input field when a rich option with tag is selected', async () => {
    const options = [
      { label: 'Option 1', value: '1', tag: 'Recommended', description: 'Desc 1' },
      { label: 'Option 2', value: '2', description: 'Desc 2' }
    ];
    const selectedOption = ref(options[0]);
    factory({
      id: 'test-select-id',
      modelValue: selectedOption,
      options
    });
    await nextTick();
    const inputAppend = wrapper.find('.puik-single-select__input .puik-input__append');
    expect(inputAppend.find('.puik-option__tag').exists()).toBe(true);
    expect(inputAppend.find('.puik-option__tag').text()).toBe('Recommended');
  });

  it('should display the tag icon in the selected input field when a rich option with tag icon is selected', async () => {
    const options = [
      { label: 'Option 1', value: '1', tag: 'Recommended', tagIcon: 'language', description: 'Desc 1' }
    ];
    const selectedOption = ref(options[0]);
    factory({
      id: 'test-select-id',
      modelValue: selectedOption,
      options
    });
    await nextTick();
    const inputAppend = wrapper.find('.puik-single-select__input .puik-input__append');
    expect(inputAppend.find('.puik-option__tag').exists()).toBe(true);
    expect(inputAppend.find('.puik-tag__icon').exists()).toBe(true);
  });

  it('should not display the tag in the selected input field when the option has no tag', async () => {
    const options = [
      { label: 'Option 1', value: '1', description: 'Desc 1' },
      { label: 'Option 2', value: '2', description: 'Desc 2' }
    ];
    const selectedOption = ref(options[0]);
    factory({
      id: 'test-select-id',
      modelValue: selectedOption,
      options
    });
    await nextTick();
    const inputAppend = wrapper.find('.puik-single-select__input .puik-input__append');
    expect(inputAppend.find('.puik-option__tag').exists()).toBe(false);
  });

  it('should apply zIndex style to dropdown', async () => {
    const wrapper = mount(PuikSelect, {
      props: {
        id: 'test-select-id',
        modelValue: null,
        zIndex: 200
      },
      slots: {
        default: `
          <puik-option label="Option 1" value="1"></puik-option>
        `
      },
      global: {
        components: {
          PuikOption
        }
      }
    });
    await wrapper.setProps({ open: true });
    await wrapper.vm.$nextTick();
    const dropdown = wrapper.find('.puik-select-dropdown');
    expect(dropdown.attributes('style')).toContain('z-index: 200');
  });

  it('should render only one input when multiSelect is true', () => {
    const options = [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }];
    factory({
      id: 'test-select-id',
      modelValue: ref([]),
      options,
      multiSelect: true
    });
    expect(wrapper.findAll('input[role="combobox"]').length).toBe(1);
  });
});
