import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikSearch from '../src/search.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Search tests', () => {
  let wrapper: VueWrapper<any>
  const findField = () => wrapper.find('.puik-search__field')
  const findWrapper = () => wrapper.find('.puik-search__wrapper')
  const findCancelButtonIcon = () => wrapper.find('.puik-search__cancel-icon')
  const findConfirmButton = () => wrapper.find('.puik-search__confirm-icon')

  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikSearch, {
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

  it('should emit a value', async () => {
    const text = 'This is a text'
    factory()
    await wrapper.setValue(text)
    expect(wrapper.emitted('update:modelValue')?.[0]).toStrictEqual([text])
  })

  it('should be disabled', () => {
    factory({ disabled: true })
    expect(findWrapper().classes()).toContain('puik-search__wrapper--disabled')
  })

  it('should add a focus class when input is focused', async () => {
    factory()
    await findField().trigger('focus')
    expect(findWrapper().classes()).toContain('puik-search__wrapper--focus')
  })

  it('should delete the content on click of the cancel icon', async () => {
    factory()
    await findCancelButtonIcon().trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toStrictEqual([null])
  })

  it('should send the content on click of the confirm icon', async () => {
    const text = 'This is a text'
    factory()
    await wrapper.setValue(text)
    await findConfirmButton().trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toStrictEqual([text])
  })
})
