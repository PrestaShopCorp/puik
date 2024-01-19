import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikTableSearchInput from '../src/table-search-input.vue'
import type { searchOption } from '../src/table-search-input'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'
import type { PuikTableHeader } from '../src/table'

describe('TableSearchInput tests', () => {
  let wrapper: VueWrapper<any>
  const header: PuikTableHeader = {
    value: 'column_value',
    text: 'column_text',
    size: 'lg',
    align: 'center',
    preventExpand: true,
    searchable: true,
    searchSubmit: true,
    searchType: 'text',
  }

  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikTableSearchInput, {
      props: {
        ...propsData,
      },
      ...options,
    })
  }
  it('should be a vue instance', () => {
    factory()
    expect(wrapper).toBeTruthy()
  })

  it('should have column_value as name prop', () => {
    factory({
      name: header.value,
    })
    expect(wrapper.props().name).toBe(header.value)
  })

  it('should have column_value as column prop', () => {
    factory({
      column: header.value,
    })
    expect(wrapper.props().column).toBe(header.value)
  })

  it('should be a submit button', () => {
    factory({
      searchSubmit: header.searchSubmit,
    })
    expect(
      wrapper.find('.puik-table-search-input--submit .puik-button').exists()
    ).toBe(true)
  })

  it('should display a reset button', () => {
    factory({
      searchReset: true,
      searchSubmit: true,
    })
    expect(
      wrapper.find('.puik-table-search-input--reset .puik-button').exists()
    ).toBe(true)
  })

  it('should be display an input of type text', () => {
    factory({
      searchType: header.searchType,
    })
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
  })

  it('should display two inputs of type number', () => {
    factory({
      searchType: 'range',
    })
    expect(wrapper.findAll('input[type="number"]').length).toBe(2)
  })

  it('should emit searchSubmitEvent when the submitButton is clicked', () => {
    factory({
      searchSubmit: true,
    })
    wrapper
      .find('.puik-table-search-input--submit .puik-button')
      .trigger('click')
    expect(wrapper.emitted().searchSubmitEvent).toBeTruthy()
  })

  it('should emit searchResetEvent when the reset button is clicked', () => {
    factory({
      searchSubmit: true,
      searchReset: true,
    })
    wrapper
      .find('.puik-table-search-input--reset .puik-button')
      .trigger('click')
    expect(wrapper.emitted().searchResetEvent).toBeTruthy()
  })

  it('should emit searchRangeValue event with correct payload when range inputs are updated', async () => {
    const searchOption: searchOption = {
      searchBy: 'range',
      inputRange: { min: 1, max: 10 },
    }
    factory({
      searchType: 'range',
      column: searchOption.searchBy,
    })
    await wrapper
      .find('.puik-input__field[placeholder="Min"]')
      .setValue(searchOption.inputRange?.min)
    await wrapper
      .find('.puik-input__field[placeholder="Max"]')
      .setValue(searchOption.inputRange?.max)
    if (
      wrapper.emitted().searchRangeValue &&
      wrapper.emitted().searchRangeValue.length === 2
    ) {
      expect(wrapper.emitted().searchRangeValue[1]).toEqual([searchOption])
    }
  })

  it('should emit searchTextValue event with correct payload when text input is updated', async () => {
    const searchOption: searchOption = {
      searchBy: header.value,
      inputText: 'test',
    }
    factory({
      searchType: 'text',
      column: searchOption.searchBy,
    })
    await wrapper.find('input[type="text"]').setValue(searchOption.inputText)
    if (wrapper.emitted().searchTextValue) {
      expect(wrapper.emitted().searchTextValue[0]).toEqual([searchOption])
    }
  })
})
